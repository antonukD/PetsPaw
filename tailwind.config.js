/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        'leter2px': '2px',
      },
      colors: {
        'page-color': '#F8F8F7',
        'img-color': '#FBE0DC',
        'link-color-y': '#FFD280',
        'link-color-g': '#97EAB9',
        'link-color-b': '#B4B7FF',
        'active-color':'#FF868E',
        'active-border' : '#FBE0DC',
        'hover-link': '#FBE0DC'
      },
      container: {
        center: true,
      },
    },
  },
  variants: {},
  plugins: [],
}