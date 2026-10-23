import type { Config } from 'tailwindcss';

const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Editorial system (theme-aware, defined in globals.css)
        canvas: v('canvas'), // Alabaster Ivory / near-black
        surface: v('surface'), // card surface
        stone: v('stone'), // Pale Stone Oat / warm charcoal
        ash: v('ash'), // Deep Charcoal Ash panels
        ink: v('ink'), // Deep Charcoal text / ivory
        muted: v('muted'),
        line: v('line'), // Muted Sand hairline
        rust: v('rust'), // Terracotta Rust — primary accent
        brand: v('rust'), // legacy name maps to rust
        midnight: v('ash'), // legacy name maps to ash
        cream: v('canvas'), // legacy names
        lavender: v('stone'),
        // Static accents
        wa: '#25D366',
        leaf: '#16A34A',
        marigold: '#F59E0B',
        terracotta: '#C2593E',
        violet: '#7C3AED'
      },
      fontFamily: {
        heading: ['var(--font-jakarta)', 'var(--font-deva)', 'Arial', 'sans-serif'],
        body: ['var(--font-inter)', 'var(--font-deva)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'var(--font-deva)', 'ui-monospace', 'monospace']
      },
      borderRadius: { card: '4px' },
      boxShadow: {
        micro: '0 20px 20px rgba(0,0,0,.02)',
        soft: '0 1px 2px rgba(0,0,0,.03), 0 20px 40px -24px rgba(0,0,0,.12)',
        lift: '0 28px 48px -20px rgba(0,0,0,.16)'
      },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.16,1,0.3,1)' },
      maxWidth: { container: '1160px' }
    }
  },
  plugins: []
};
export default config;
