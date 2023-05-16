/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': { 'max': '720px' },
      'sm': { 'max': '720px' },
      'md': { 'max': '720px' },
    },
    colors: {
      'color-1': '#FEE4CB',
      'color-2': '#0D0543',
      'color-3': '#EAF0FF',
      'color-4': '#F8AF6A',
      'color-5': '#F2F2F2',
      'color-6': '#c0eef4',
      'color-7': '#c0eef4',//green
      'color-8': '#c0eef4',//red
      'white': '#FFFFFF',
      'black': '#000000'
    },
    fontFamily: {
      'font-logo': ['Lemon', 'cursive'],
      'font-primary': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [],
}
