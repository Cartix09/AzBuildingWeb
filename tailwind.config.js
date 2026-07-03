/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm premium navy + gold palette (BCC-inspired direction).
        // slate.* keep their names so existing classes reskin site-wide.
        slate: {
          deep: '#0F2140', // primary navy background, header, footer
          surface: '#1B3A63', // raised cards inside dark sections
        },
        navy: {
          DEFAULT: '#0F2140',
          deep: '#0A182F', // darkest strips (top bar), footer base
          surface: '#1B3A63',
          light: '#274C82', // lighter navy accents / borders
        },
        gold: {
          DEFAULT: '#F5A524', // primary warm accent (nav bar, highlights)
          soft: '#FBBF24',
          deep: '#C77D0A',
        },
        orange: {
          brand: '#EA580C', // CTAs, hover, timeline nodes
          warm: '#F97316',
        },
        steel: '#8AA0BF', // secondary text on navy (warmer, higher-contrast)
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
          'linear-gradient(to right, rgba(138,160,191,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(138,160,191,0.08) 1px, transparent 1px)',
        // Warm, controlled gold→amber bar for the primary nav + buttons.
        // Calmer than a full gold→red gradient: less bright start, warm amber
        // end (not aggressive red-orange), so it reads premium, not glossy.
        'gold-bar': 'linear-gradient(95deg, #F1A62B 0%, #E48C24 100%)',
        'gold-bar-hover': 'linear-gradient(95deg, #E99B24 0%, #D97E1C 100%)',
        // Subtle warm glow for hero / section backgrounds.
        'warm-glow': 'radial-gradient(60% 55% at 70% 0%, rgba(245,165,36,0.16) 0%, rgba(245,165,36,0) 60%)',
        'navy-fade': 'linear-gradient(180deg, #0F2140 0%, #0A182F 100%)',
      },
      boxShadow: {
        gold: '0 6px 16px -12px rgba(228,140,36,0.35)', // subtle, not glossy
        navy: '0 20px 45px -20px rgba(5,15,35,0.7)',
      },
    },
  },
  plugins: [],
}
