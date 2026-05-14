import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Jan Szczekulski — Full-Stack SDE and AI researcher.',
};

export default function AboutPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl font-bold text-text mb-1">About Jan</h1>
      <p className="text-text-muted italic text-sm mb-10">Welcome to my corner of the internet.</p>

      <div className="space-y-5 text-text text-sm leading-relaxed">
        <p>
          I&apos;m a Full-Stack Software Engineer and AI researcher with a background in
          Mathematics &amp; Computer Science. I like building things that work, breaking down
          hard problems, and finding ways to apply AI to real-world challenges.
        </p>

        <p>
          Currently, I&apos;m pursuing my Masters in CSE at{' '}
          <a href="https://ucsd.edu" className="text-accent hover:text-accent-hover underline underline-offset-2">UC San Diego</a>,
          focusing on Deep RL and Computer Vision. I&apos;m also a GSR at the{' '}
          <a href="https://contextualrobotics.ucsd.edu/" className="text-accent hover:text-accent-hover underline underline-offset-2">Contextual Robotics Institute</a>{' '}
          working on a home robot project.
        </p>

        <p>
          Before that, I spent 3 years at{' '}
          <a href="https://www.thg.com" className="text-accent hover:text-accent-hover underline underline-offset-2">The Hut Group</a>{' '}
          — first as a Data Scientist building A/B testing tools (saving ~£3M/year), then as a
          Software Engineer leading the experimentable widgets project (enabling ~£7M/year in
          A/B test value). I also interned at{' '}
          <a href="https://amazon.com" className="text-accent hover:text-accent-hover underline underline-offset-2">Amazon</a>{' '}
          working on supply chain backends.
        </p>

        <p>
          On the research side, I collaborate with{' '}
          <a href="https://www.researchgate.net/profile/Jan-Szczekulski" className="text-accent hover:text-accent-hover underline underline-offset-2">Lazarski University</a>{' '}
          on AI applications in dermatology — using CycleGANs and CNNs to predict and visualize
          treatment outcomes for Port-Wine Stain birthmarks. Published at ASLMS 2024.
        </p>

        <p>
          I graduated from the{' '}
          <a href="https://www.liverpool.ac.uk/" className="text-accent hover:text-accent-hover underline underline-offset-2">University of Liverpool</a>{' '}
          with a joint degree in Mathematics &amp; Computer Science.
        </p>

        <p>
          Off the keyboard, I&apos;m perfecting my basketball dribble and immersing myself in reads.
          If you want to get in touch, I&apos;m most responsive over{' '}
          <a href="mailto:szczekulskij@gmail.com" className="text-accent hover:text-accent-hover underline underline-offset-2">email</a>{' '}
          and{' '}
          <a href="https://www.linkedin.com/in/szczekulskij/" className="text-accent hover:text-accent-hover underline underline-offset-2">LinkedIn</a>.
        </p>
      </div>
    </div>
  );
}
