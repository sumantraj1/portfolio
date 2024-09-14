/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      opacity: {
        '20': '0.2',  // Custom opacity utility class
      },
      transitionProperty: {
        'opacity': 'opacity', // Adding transition for opacity
      }
    }
  },
  plugins: [],
}

