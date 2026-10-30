import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blueprint palette taken from the logo: drafting-paper blue-white, navy ink, gold accent.
        paper: '#EEF3F9',        // page / sheet
        band: '#E1EAF4',         // alternating sections
        surface: '#F8FBFF',      // raised cards / inputs
        ink: '#0F2A52',          // navy: text and all rules
        'ink-soft': '#4B6285',   // secondary text
        'ink-faint': '#5B7092',  // captions
        rule: '#C2D2E6',         // grid lines & hairlines
        'rule-strong': '#9DB6D1',
        gold: '#9A6A0E',         // accent for text and small marks (4.6:1 on paper)
        'gold-dark': '#7C540A',
        'gold-bright': '#C9973A', // logo gold: fills and tints only
        'gold-tint': '#F4EAD3',
      },
      fontFamily: {
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
