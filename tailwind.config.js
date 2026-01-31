/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        void: '#0a0a0f',
        surface: '#12121a',
        border: '#1e1e2e',
        accent: '#00d4aa',
        'accent-dim': '#00d4aa40',
        glow: '#00d4aa20',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(0, 212, 170, 0.4)',
        'glow-sm': '0 0 20px -5px rgba(0, 212, 170, 0.3)',
      },
    },
  },
  plugins: [],
};
