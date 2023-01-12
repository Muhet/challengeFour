/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  variants:{
    extend:{
      display: ['group-focus'],
      opacity: ['group-focus'],
      inset: ['group-focus']
    }
  },
  plugins: [],
}
