/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    screens: {
      'xs': {'max':'385px'},
      'sm': {'max':'425px'},
      'lg': {'max':'1024px'},
       
    },
    extend: {
      
    },
  },
  plugins: [],
}
