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
        // Terminal palette — warm charcoal canvas, amber accent, mono voice.
        paper: '#14120E',        // base page (warm near-black)
        band: '#0F0D09',         // darker band for alternating sections
        surface: '#1D1A14',      // raised cards / inputs
        ink: '#E7E0D1',          // primary text (warm off-white)
        'ink-soft': '#A79F8D',   // secondary text
        'ink-faint': '#726B5C',  // captions / tertiary
        rule: '#2C2820',         // hairline rules & borders
        'rule-strong': '#3C3629',
        pine: '#F2B04C',         // single accent — amber (token name kept)
        'pine-dark': '#D9922E',
        'pine-tint': '#2A2416',  // accent wash background
        // Status semantics — used for live/console states.
        up: '#7BD88F',
        down: '#E5734E',
        // Legacy aliases kept so older references degrade gracefully.
        primary: '#E7E0D1',
        secondary: '#F2B04C',
        accent: '#7BD88F',
      },
      fontFamily: {
        display: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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
