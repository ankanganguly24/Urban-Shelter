/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        brown: '#9A3B3B',
        lightbrown: '#C08261',
        vintage: '#E2C799',
        zinc: '#F2ECBE',
        white: '#FEFAE0',
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.5s ease-in-out',
    },
  },
  variants: {},
  plugins: [],
}