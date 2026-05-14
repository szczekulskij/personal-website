import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#e9e4d9',
        'bg-card': '#e0dbd0',
        text: '#1a1a1a',
        'text-muted': '#6b6b6b',
        'text-light': '#8a8a8a',
        accent: '#4a5a3a',
        'accent-hover': '#3d4d2f',
        border: '#d4d0c8',
      },
      fontFamily: {
        sans: ['Source Serif 4', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
