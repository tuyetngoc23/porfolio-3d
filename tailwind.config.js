import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [{ pattern: /font-.+/ }, { pattern: /text-white-.+/ },],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['"General Sans"', ...fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#010103',
          200: '#0E0E10',
          300: '#1C1C21',
          500: '#3A3A49',
          600: '#1A1A1A',
        },
        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
      backgroundImage: {
        terminal: "url('/porfolio-3d/assets/terminal.png')",
        gray_gradient: 'linear-gradient(to right, #aaa, #ccc)',
      },
    },
  },
  plugins: [],
};