/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT : '#05EBAE'
        }
      }
    },
  },
  plugins: [],
}