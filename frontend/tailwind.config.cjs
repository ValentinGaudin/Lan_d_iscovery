/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content:["./src/**/*.{ts,tsx}"],
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base : {
          DEFAULT : '#000',
          light : '#0F1217',
        },
        primary: {
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
        glow : {

        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}