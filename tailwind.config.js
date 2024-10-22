/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#007dff',
        'secondary': '#004377',
        'primary-dark': '#020e28'

      },
      boxShadow: {
        'shadow': '0 0 3px 0 rgb(0 0 0 / 0.1), 0 0 2px 0px rgb(0 0 0 / 0.1)'
      }
    },
    fontFamily: {
      poppins: ['"Poppins", sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: "32px"
      },
      screens: {
        "2xl": "1220px"
      }
    },
  },
  plugins: [],
}