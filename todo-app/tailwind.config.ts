import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector', // Use the selector strategy for dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Scan components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#2563eb',
        },
        background: {
          light: '#ffffff',
          dark: '#1e293b',
        },
      },
    },
  },
  plugins: [],
};

export default config;
