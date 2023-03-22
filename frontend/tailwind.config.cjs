/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary : {
          DEFAULT : '#1D1F26',
          light : '#383D48',
        },
        secondary : {
          DEFAULT : '#BB3DF1',
        },
        tertiary : {
          DEFAULT : '#03C988',
        },
        quaternary : {
          DEFAULT: '#1F9CEE'
        },
        base : {
          DEFAULT : '#0F1217',
        }
      }
    },
  },
  plugins: [],
}