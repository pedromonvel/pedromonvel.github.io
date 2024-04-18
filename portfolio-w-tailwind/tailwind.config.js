/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      ssm: '250px',
      ssl: '390px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      boxShadow: {
        '3xl': '4px 4px 9px 0px rgb(0, 0, 0);',
        '4xl': '0 0 0 100vmax rgba(0, 0, 0, .5)',
      },
      boxShadowTop: {
        '6xl': '0px -2px 9px 0px black;',
      }
    },
  },
  plugins: [],
}