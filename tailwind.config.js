const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': {
        
        500: '#FFFEFE'
      },
      'gray':{
        100: '#E3E4E6',
        300:'#E9E8E9',
        400:'#ECEDED',
        500:'#EDEDED',
        600:'#606060',
        650:'#696969',
        800:'#5B5B5B',
        900:'#535353'
      },
      black: {
        900:'#000000'
      }
      // ...
    },
    fontFamily: {
      "inter": "Inter",
      "reckless-neue": "Reckless Neue",
      "gloria-hallelujah": "'Gloria Hallelujah'",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
