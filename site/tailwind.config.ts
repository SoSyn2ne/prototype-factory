import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        'background-light': '#f7f7f4',
        'background-dark': '#111113',
      },
      fontFamily: {
        display: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.5rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(17, 17, 19, 0.04), 0 12px 28px rgba(17, 17, 19, 0.05)',
        lift: '0 1px 2px rgba(17, 17, 19, 0.05), 0 20px 42px rgba(17, 17, 19, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
