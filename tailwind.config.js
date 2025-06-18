/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customBlack: '#0B0B0B',
        customBrown: '#121212',
        customGreen: '#099250',
        customRed: '#FF542A',
        customViolet: '#7E3AF2',
      },
      fontFamily: {
        ttcommons: ['"TT Commons"', 'sans-serif'],
      }

    },
  },
  plugins: [],
} 