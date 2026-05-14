#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/website-stack';

const app = new cdk.App();

new WebsiteStack(app, 'JanWebsiteStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION || 'us-east-1',
  },
  // Configure these for your domain
  domainName: app.node.tryGetContext('domainName') || undefined,
  certificateArn: app.node.tryGetContext('certificateArn') || undefined,
});
