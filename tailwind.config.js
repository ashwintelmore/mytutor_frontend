/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens: {
      'xs': {'max':'385px'},
      'md': {'max':'480px'},
       
    },
    extend: {
      
    },
  },
  plugins: [],
}
