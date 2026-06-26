/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — keep these exact (see CLAUDE.md)
        slate: {
          deep: '#0F172A', // primary dark background, header, footer
          surface: '#1B2436', // raised cards inside dark sections
        },
        orange: {
          brand: '#EA580C', // CTAs, hover, timeline nodes, accents
        },
        steel: '#64748B', // secondary text, borders, technical labels
        base: '#F8FAFC', // light sections / clean backgrounds
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1440px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'fade-in': 'fade-in 0.4s ease-out',
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(to right, rgba(100,116,139,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
