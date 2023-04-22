/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'gridnew': 'repeat(4, minmax(100px, 500px))'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

