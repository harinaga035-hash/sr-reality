/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black:  '#0B0B0B',
        white:  '#F8F8F8',
        gold:   '#C9A96E',
        'gold-light': '#E2C898',
        'gold-dark':  '#A07840',
        'surface':    '#141414',
        'surface-2':  '#1C1C1C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra:  '0.5em',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up':    'fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 1.4s ease forwards',
        'scale-hero': 'scaleHero 18s ease-out forwards',
        'scroll-cue': 'scrollCue 2.2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { from:{ opacity:0, transform:'translateY(32px)' }, to:{ opacity:1, transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:0 }, to:{ opacity:1 } },
        scaleHero: { '0%':{ transform:'scale(1)' }, '100%':{ transform:'scale(1.08)' } },
        scrollCue: { '0%,100%':{ opacity:0.4, transform:'scaleY(1)' }, '50%':{ opacity:1, transform:'scaleY(1.2)' } },
      },
    },
  },
  plugins: [],
}
