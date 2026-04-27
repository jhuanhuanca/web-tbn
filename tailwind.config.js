/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        tbn: {
          light: '#54b144',
          dark: '#222d25',
          white: '#ffffff',
          neutral: '#f5f5f5',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.10)',
      },
    },
  },
}

