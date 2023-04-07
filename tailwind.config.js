/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
       },
       colors: {
        custom: '#FEFBFF',
        specialgrey: '#1C1C1C',
        greyuse:  '#777777',
      },
      backgroundSize:{
        '200%':'200%',
        '100%': '100%',
      }
    },
   
  },
  plugins: [],
}
