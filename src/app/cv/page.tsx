import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Jan Szczekulski — Curriculum Vitae',
};

const experience = [
  {
    company: 'Amazon',
    role: 'SDE Intern',
    period: 'Jun 2024 – Sep 2024',
    description: 'Worked with backends integrating different parts of supply chain together.',
  },
  {
    company: 'UC San Diego',
    role: 'Graduate Student Researcher',
    period: 'Sep 2023 – Present',
    description: 'Contextual Robotics Institute. Home robot project. Focus on Deep RL and Computer Vision.',
  },
  {
    company: 'The Hut Group',
    role: 'Software Engineer',
    period: 'Dec 2021 – Aug 2023',
    description: 'Led experimentable widgets project enabling dynamic A/B testing across 4 backends and 2 frontends. Estimated £7M/year impact.',
    tech: 'Java (SpringBoot), React, Angular',
  },
  {
    company: "Ambroziak's Dermatology Clinic",
    role: 'Research Collaboration',
    period: 'Jun 2021 – Present',
    description: 'AI applications in dermatology. CycleGAN for PWS treatment prediction. Published at ASLMS 2024.',
    tech: 'PyTorch, TensorFlow, Pandas',
  },
  {
    company: 'The Hut Group',
    role: 'Data Scientist',
    period: 'Sep 2020 – Dec 2021',
    description: 'Built A/B testing automation tools. Tests saved/earned estimated £3M/year. ML demand prediction.',
    tech: 'Python, scikit-learn, SQL, Jenkins',
  },
  {
    company: 'University of Liverpool',
    role: 'Research Assistant',
    period: 'Jun 2020 – Aug 2020; Aug 2022 – Sep 2023',
    description: 'CNN-based geometric reconstruction of nanowires from tomography data.',
    tech: 'Python, TensorFlow, NumPy',
  },
];

const education = [
  {
    school: 'UC San Diego',
    degree: 'MSc Computer Science (AI specialization)',
    period: 'Sep 2023 – Present',
  },
  {
    school: 'University of Liverpool',
    degree: 'BSc Mathematics & Computer Science',
    period: 'Sep 2017 – May 2020',
  },
];

export default function CVPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-14">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-text mb-1">CV</h1>
          <p className="text-text-muted italic text-sm">Experience, education, and skills.</p>
        </div>
        <a
          href="/resume.pdf"
          className="text-[10px] font-mono tracking-widest px-3 py-1.5 border border-border rounded hover:border-text text-text-muted hover:text-text transition-colors"
        >
          DOWNLOAD PDF
        </a>
      </div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-5">Experience</h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={`${item.company}-${item.period}`} className="border-l-2 border-border pl-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-text">{item.company}</h3>
                  <p className="text-text-muted text-xs">{item.role}</p>
                </div>
                <span className="text-[10px] font-mono text-text-light whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-xs text-text mt-1.5">{item.description}</p>
              {item.tech && (
                <p className="text-[10px] font-mono text-text-light mt-1">{item.tech}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-5">Education</h2>
        <div className="space-y-5">
          {education.map((item) => (
            <div key={item.school} className="border-l-2 border-border pl-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-text">{item.school}</h3>
                  <p className="text-text-muted text-xs">{item.degree}</p>
                </div>
                <span className="text-[10px] font-mono text-text-light whitespace-nowrap">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-[10px] font-mono tracking-widest text-text-muted uppercase mb-5">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">Languages</p>
            <p className="text-xs text-text">Python, Java, TypeScript, Golang, SQL</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">AI/ML</p>
            <p className="text-xs text-text">PyTorch, TensorFlow, scikit-learn, Fast.ai</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">Web</p>
            <p className="text-xs text-text">React, Next.js, Spring Boot, Node.js</p>
          </div>
          <div>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">Infrastructure</p>
            <p className="text-xs text-text">AWS, Docker, Jenkins, Linux, Git</p>
          </div>
        </div>
      </section>
    </div>
  );
}
