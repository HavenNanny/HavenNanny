/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          950: '#24190f',
        },
        accent: {
          50: '#fff9ed',
          100: '#fef2d6',
          200: '#fce4ac',
          300: '#fbd078',
          400: '#f9b637',
          500: '#f89e1b',
          600: '#e47d0e',
          700: '#bd5a0e',
          800: '#964713',
          900: '#793a13',
          950: '#461c06',
        }
      },
    },
  },
  plugins: [],
};