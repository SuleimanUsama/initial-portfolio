/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#0F0F0F',
        surface:   '#1A1A1A',
        border:    '#2A2A2A',
        offwhite:  '#F0EDE6',
        muted:     '#8A8580',
        teal:      '#00D4AA',
        amber:     '#C8922A',
        red:       '#C0392B',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      animation: {
        'scan':      'scan 2s ease-out forwards',
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        scan: {
          '0%':   { top: '0%', opacity: '0.9' },
          '100%': { top: '100%', opacity: '0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
