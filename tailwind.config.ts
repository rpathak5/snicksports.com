import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#08040F',
          card: '#0d0818',
          border: '#231540',
          divider: '#1e1030',
          pink: '#C1008B',
          purple: '#2A00A2',
          'mid-purple': '#7B4FD4',
          'light-purple': '#9B6FE8',
          muted: '#b0a8c8',
          desc: '#8a7fa8',
          'pink-tag': '#2a0520',
          'purple-tag': '#120826',
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'marquee': 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
