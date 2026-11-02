import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Jan Szczekulski - Curriculum Vitae',
};

const experience = [
  {
    company: 'Amazon',
    location: 'Seattle, USA',
    roles: [
      { title: 'Software Development Engineer', period: 'Apr 2025 – Present' },
    ],
    bullets: [
      'Designed and led the end-to-end deprecation of a 17-year-old Tier-1 configuration service (~10M calls/day; a dependency for 5 fulfillment workflows across 7 systems), re-architecting configuration data from 9 scattered database tables into 3 clean DynamoDB-backed APIs. Delivered as 93 code reviews and 12 coordinated production deployments with zero site impact, removing ~9k lines of parsing code logic and closing a service-authentication security gap.',
      'Designed and built a backend service sitting in the request path of a core fulfillment platform, engineered for 10k requests/second; making design tradeoffs between scalability, simplicity, externalization and robustness in terms of infrastructure and low-level development detail.',
      "Designed and extended a core outbound-flow routing system to account for upstream machines' capacity and physical graph-like connectivity of underlying process paths. Designed and implemented a new Linear Programming optimization objective which limits the load of a process path based on upstreams' fullness signal (use case entitlement ~$14.3M annualized).",
      'Translated live site-reported bugs into clean designs and implementations, resulting in warehouse-automation features with measurable impact: a bulk-item handling workflow now live at 50+ sites (part of a $45.6M/yr program), an auto-login capability removing ~3 s from every associate login worldwide, and an automatic mis-sort detection system eliminating ~10k mis-routed containers per month.',
      'Root-caused and halved latency (p50/p99) across 10+ APIs of a Tier-1 item sortation service that was overloading during peak season. Designed and built the missing observability metrics, removed redundant service calls, and parallelized hot paths, ending a multi-week run of latency incidents (e.g. core API 600 ms → 400 ms; item-lookup API 420 ms → 230 ms).',
      'Owned 6+ Tier-1 production systems end-to-end (on-call, incident response, load-test and scaling-readiness authoring, migrations); led 12 peak-preparedness meetings, deep-diving and sharing information on possible system risks and available low-level levers and actionable responses to avoid peak severity events, resulting in no system downtime.',
      'Designed and built distributed backend services in Java/Spring on DynamoDB, ECS, Lambda, SQS, SNS, AppConfig and Kinesis, including large-scale migration infrastructure (double-read/double-write validation, staged traffic shifting, rollback mechanisms) and self-service operations tooling that cut site-configuration changes from ~2 days to ~15 minutes.',
    ],
  },
  {
    company: 'UC San Diego',
    location: 'San Diego, USA',
    roles: [
      { title: 'Graduate Research Assistant @ Contextual Robotics Institute', period: 'Sept 2024 – Mar 2025' },
      { title: 'Teaching Assistant', period: 'Jan 2025 – Mar 2025' },
    ],
    bullets: [
      "Co-author and lead implementer of a state-of-the-art robotic tabletop rearrangement system published at ICRA 2025, focusing on long-horizon planning and robust mechanical execution under physical-world uncertainty.",
      'Built planning systems integrating vision-language models and large language models for mobile manipulation and multi-step reasoning tasks.',
      'As a TA, helped prepare study resources and provided office hours as well as seminars for a Search and Optimization course.',
    ],
  },
  {
    company: 'The Hut Group (THG)',
    location: 'Manchester, UK',
    roles: [
      { title: 'Software Engineer', period: 'Dec 2021 – Aug 2023' },
      { title: 'Data Scientist', period: 'Sept 2020 – Dec 2021' },
    ],
    bullets: [
      'Designed and implemented experimentation infrastructure integrating an in-house A/B testing backend with a high-throughput widget delivery platform serving 5k+ RPS.',
      'Built backend APIs, integration services, rollout tooling, and React-based frontend systems enabling rapid experiment configuration supporting real-time configuration updates, feature exposure logic, and analytics collection in large-scale e-commerce systems - contributing to £150M+ YoY business impact.',
      'Designed and implemented backend integrations between experimentation systems, widgeting services, and analytics platforms using TypeScript, Python, SQL, React.js, and MVC-based architectures.',
      'Built SQL and Python pipelines for experiment evaluation, statistical analysis, and operational analytics across millions of daily events.',
      'Managed production infrastructure including Kubernetes clusters, deployment pipelines, VM provisioning, patching, and operational maintenance.',
    ],
  },
];

const publications = [
  {
    title: 'OmniManip: Towards General Robotic Manipulation via Object-Centric Interaction Primitives as Spatial Constraints',
    venue: 'ICRA 2025',
    description: 'Co-author; contributed to long-horizon robotic planning, manipulation systems, and LLM-assisted embodied AI reasoning.',
  },
  {
    title: 'In Search for Optimal Schedule During Long-Term Treatment of Port-Wine Birthmarks',
    venue: 'Scientific Reports',
    description: 'Co-author; applied machine learning and statistical analysis methods to medical outcome prediction from imaging datasets.',
  },
];

const education = [
  {
    school: 'University of California, San Diego',
    degree: 'M.S. in Computer Science, GPA: 3.85',
    period: '2023 – 2025',
  },
  {
    school: 'University of Liverpool',
    degree: 'B.Sc. (Hons) Computer Science & Mathematics, First Class',
    period: '2017 – 2020',
  },
];

const skills = [
  { category: 'Languages', items: 'Java, Go, Python, C, TypeScript, SQL' },
  { category: 'Cloud & Infrastructure', items: 'AWS ECS, EC2, Lambda, DynamoDB, SNS, SQS, Kinesis, AppConfig, AWS CDK, GCP, Docker, Kubernetes' },
  { category: 'Frontend', items: 'React.js, JavaScript, MVC Architectures' },
  { category: 'Backend & Distributed Systems', items: 'Spring Boot, REST APIs, Distributed Systems, Load Balancing & Scaling, Data Migration, Reliability Engineering, API Design, High-Throughput Systems' },
  { category: 'Data Systems', items: 'A/B Testing Platforms, Statistical Analysis, Linear Programming, Data Aggregation Systems' },
  { category: 'ML & Research', items: 'Agentic Development, PyTorch, Vision-Language Models, Large Language Models, Robotics Planning Systems' },
];

export default function CVPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-14">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-text">CV</h1>
        <a
          href="/resume.pdf"
          className="text-xs font-mono tracking-widest px-3 py-1.5 border border-border rounded hover:border-text text-text-muted hover:text-text transition-colors"
        >
          DOWNLOAD PDF
        </a>
      </div>
      <p className="text-text-muted text-sm mb-10 leading-relaxed">
        Software engineer with 5+ years designing and building distributed systems end to end,
        from warehouse associate-facing tools that reconcile physical and virtual item movement,
        to internal configuration frontends, high-throughput A/B testing backend integrations,
        and network-wide fulfillment services. I take pride in ownership, data-driven decisions,
        user obsession, and forward-thinking system design with clean interfaces within and across
        services.
      </p>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-5">Experience</h2>
        <div className="space-y-8">
          {experience.map((item) => (
            <div key={item.company} className="border-l-2 border-border pl-4">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-sm font-bold text-text">{item.company}</h3>
                <span className="text-xs font-mono text-text-light whitespace-nowrap">{item.location}</span>
              </div>
              {item.roles.map((role) => (
                <div key={role.title} className="flex items-start justify-between gap-3 mb-0.5">
                  <p className="text-xs text-text-muted">{role.title}</p>
                  <span className="text-xs font-mono text-text-light whitespace-nowrap">{role.period}</span>
                </div>
              ))}
              <ul className="mt-2 space-y-1.5">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-xs text-text leading-relaxed pl-3 relative before:content-['–'] before:absolute before:left-0 before:text-text-light">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-12">
        <h2 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-5">Publications</h2>
        <div className="space-y-5">
          {publications.map((pub) => (
            <div key={pub.title} className="border-l-2 border-border pl-4">
              <h3 className="text-sm font-bold text-text">{pub.title}</h3>
              <p className="text-xs font-mono text-text-light mb-1">{pub.venue}</p>
              <p className="text-xs text-text-muted">{pub.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-5">Education</h2>
        <div className="space-y-5">
          {education.map((item) => (
            <div key={item.school} className="border-l-2 border-border pl-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-text">{item.school}</h3>
                  <p className="text-xs text-text-muted">{item.degree}</p>
                </div>
                <span className="text-xs font-mono text-text-light whitespace-nowrap">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-mono tracking-widest text-text-muted uppercase mb-5">Technical Skills</h2>
        <div className="space-y-3">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-mono text-text-muted uppercase tracking-wider mb-0.5">{group.category}</p>
              <p className="text-xs text-text">{group.items}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
