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
      'color-2': '#111114',
      'color-3': '#EAF0FF',
      'color-4': '#F8AF6A',
      'color-5': '#F2F2F2',
      'color-6': '#2a2929',
      'color-7': '#c0eef4',//green
      'color-8': '#808080',//red
      'color-9': '#4F39BE',
      'color-10': '#05FF00',
      'color-11' : '#1a1a2e',
      'white': '#FFFFFF',
      'black': '#000000'
    },
    fontFamily: {
      'font-logo': ['Lemon', 'cursive'],
      'font-primary': ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
