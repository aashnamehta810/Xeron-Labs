const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "smoke": "#F3F5FC8A",
        "dark-blue": "#1B4ACC",
        "light-blue": "#2181FF",
        "night": "#020001",
        "light-grey": "#9CA0A629",
        "dark-grey": "#D8DCEA",
        "teal": "#48EF98",
        "brown": "#707070",
        "charcoal": "#354352",
        "oil": "#101315",
        "black-cat": "#070D12",
        "leather": "#939698",
        "shade": "#444650"
      },
      screens: {
        '3xl': '1920px'
      },
      fontFamily: {
        "inter": ['"Inter"', ...defaultTheme.fontFamily.sans],
        "naga": ['"Naga"', ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'blue-gradient': "url('/imgs/gradient.png')"
      }
    },
  },
  plugins: [],
}
