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
        gradbluedark: '#213d84',
        gradbluelight: '#9cacd5',
        bluebg: '#1B2945',
        gradcyandark: '#75fbfd',
        gradgreylight: '#a8aebb',
        darkgreybg: '#2C3A47',
        gradgreendark: 'rgba(79,151,120,1)',
        gradgreenlight: 'rgba(213,244,190,1)',
        darkgreenbg: '#1F322B',
        graddarkbluedark: '#a0b6f5',
        gradwhitelight: '#01175D',
        darkbluebg: '#1F322B',
        cardimgshadow: '#0D2368',
        discordbg: '#5865F2',
        githubbg: '#171515',
        explorebg: '#3660F4',
        browsebg: '#1C1C1C'
      },
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      backgroundSize:{
        '200%':'200%',
        '100%': '100%',
      },
      spacing: {
        '104':'22rem',
        '112':'28rem'
      }
    },
  },
  plugins: [],
}