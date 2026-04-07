/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        'space-grotesk': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'rgb(0, 0, 0)',
        foreground: 'rgb(255, 255, 255)',
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(12px)',
        'blur-lg': 'blur(16px)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(16, 185, 129, 0.3)',
      },
    },
  },
  plugins: [],
}
