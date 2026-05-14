import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import { Construct } from 'constructs';

interface WebsiteStackProps extends cdk.StackProps {
  domainName?: string;
  certificateArn?: string;
}

export class WebsiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: WebsiteStackProps) {
    super(scope, id, props);

    // S3 bucket for static site hosting
    const siteBucket = new s3.Bucket(this, 'SiteBucket', {
      bucketName: props?.domainName
        ? `${props.domainName}-site`
        : undefined,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
    });

    // CloudFront Origin Access Identity
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      'OAI',
      {
        comment: 'OAI for personal website',
      }
    );

    siteBucket.grantRead(originAccessIdentity);

    // CloudFront Function for URL rewriting (SPA-like routing with trailing slashes)
    const urlRewriteFunction = new cloudfront.Function(
      this,
      'UrlRewriteFunction',
      {
        code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // If URI ends with '/' append index.html
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  // If URI doesn't have an extension, try adding /index.html
  else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }

  return request;
}
        `),
      }
    );

    // Build CloudFront distribution config
    const distributionProps: cloudfront.DistributionProps = {
      defaultBehavior: {
        origin: new origins.S3Origin(siteBucket, {
          originAccessIdentity,
        }),
        viewerProtocolPolicy:
          cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            function: urlRewriteFunction,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 404,
          responsePagePath: '/404/index.html',
          ttl: cdk.Duration.minutes(5),
        },
      ],
    };

    // Add custom domain if provided
    if (props?.domainName && props?.certificateArn) {
      const certificate = acm.Certificate.fromCertificateArn(
        this,
        'Certificate',
        props.certificateArn
      );

      Object.assign(distributionProps, {
        domainNames: [props.domainName, `www.${props.domainName}`],
        certificate,
      });
    }

    const distribution = new cloudfront.Distribution(
      this,
      'Distribution',
      distributionProps
    );

    // Deploy site contents to S3
    new s3deploy.BucketDeployment(this, 'DeploySite', {
      sources: [s3deploy.Source.asset('../out')],
      destinationBucket: siteBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    // Outputs
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront distribution domain name',
    });

    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront distribution ID',
    });

    new cdk.CfnOutput(this, 'BucketName', {
      value: siteBucket.bucketName,
      description: 'S3 bucket name',
    });
  }
}
