import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Jan Szczekulski — Software Engineer at Amazon, AI researcher.',
};

export default function AboutPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-text mb-1">About Jan</h1>
      <p className="text-text-muted italic text-sm mb-10">Welcome to my corner of the internet.</p>

      <div className="space-y-5 text-text text-sm leading-relaxed">
        <p>
          I&apos;m a Software Engineer with 4+ years of experience designing and building
          distributed systems. I like building things that work at scale, breaking down hard
          problems, and finding ways to apply AI to real-world challenges.
        </p>

        <p>
          Currently, I&apos;m a Software Development Engineer at{' '}
          <a href="https://amazon.com" className="text-accent hover:text-accent-hover underline underline-offset-2">Amazon</a>,
          working on large-scale distributed configuration platforms handling 10M+ daily requests
          across 200+ global fulfillment sites. I focus on migration infrastructure, reliability
          engineering, and high-throughput API design.
        </p>

        <p>
          Before that, I completed my M.S. in Computer Science at{' '}
          <a href="https://ucsd.edu" className="text-accent hover:text-accent-hover underline underline-offset-2">UC San Diego</a>{' '}
          (GPA: 3.85), where I was a Graduate Research Assistant at the{' '}
          <a href="https://contextualrobotics.ucsd.edu/" className="text-accent hover:text-accent-hover underline underline-offset-2">Contextual Robotics Institute</a>.
          I co-authored a paper published at ICRA 2025 on robotic tabletop rearrangement using
          vision-language models and long-horizon planning.
        </p>

        <p>
          I spent 3 years at{' '}
          <a href="https://www.thg.com" className="text-accent hover:text-accent-hover underline underline-offset-2">The Hut Group</a>{' '}
          — first as a Data Scientist building A/B testing automation, then as a Software Engineer
          designing experimentation infrastructure serving 5k+ RPS and contributing to £150M+ YoY
          business impact.
        </p>

        <p>
          On the research side, I collaborate on AI applications in dermatology — using CycleGANs
          and CNNs to predict treatment outcomes for Port-Wine Stain birthmarks. This work has been
          published in Scientific Reports and presented at ASLMS.
        </p>

        <p>
          I graduated from the{' '}
          <a href="https://www.liverpool.ac.uk/" className="text-accent hover:text-accent-hover underline underline-offset-2">University of Liverpool</a>{' '}
          with a First Class B.Sc. in Mathematics &amp; Computer Science.
        </p>

        <p>
          Off the keyboard, I&apos;m perfecting my basketball dribble and working towards achieving an ironman.
          If you want to get in touch, I&apos;m most responsive over{' '}
          <a href="mailto:szczekulskij@gmail.com" className="text-accent hover:text-accent-hover underline underline-offset-2">email</a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/szczekulskij/" className="text-accent hover:text-accent-hover underline underline-offset-2">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}
