/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{ts,tsx}"],
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        base : {
          DEFAULT : '#0F1217',
        },
        primary: {
          DEFAULT : '#606C38'
        },
        secondary : {
          DEFAULT : '#283618',
        },
        tertiary : {
          DEFAULT : '#FEFAE0',
        },
        quaternary : {
          DEFAULT: '#DDA15E',
        },
        cinque : {
          DEFAULT : '#BC6C25',
        },
        glow : {
          DEFAULT : '#FFD700',
        },
      }
    },
  },

}