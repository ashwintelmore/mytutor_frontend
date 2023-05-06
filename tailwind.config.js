/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': { 'max': '720px' },
      'sm': { 'max': '720px' },
      'md': { 'max': '720px' },

    }
  },
  plugins: [],
}
