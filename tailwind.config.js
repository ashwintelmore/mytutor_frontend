/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': { 'max': '385px' },
      'sm': { 'max': '530px' },
      'md': { 'max': '768px' },

    },
    extend: {

    },
  },
  plugins: [],
}
