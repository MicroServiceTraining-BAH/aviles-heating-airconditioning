import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#1E3A8A',
        accent: '#EF4444',
        'accent-cool': '#38BDF8',
        'bg-light': '#F8FAFC',
        'slate-mid': '#334155',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-60': '60px 60px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(15,23,42,0.10)',
        'card-hover': '0 8px 32px 0 rgba(15,23,42,0.18)',
        cta: '0 4px 24px 0 rgba(239,68,68,0.30)',
      },
    },
  },
  plugins: [],
};

export default config;
