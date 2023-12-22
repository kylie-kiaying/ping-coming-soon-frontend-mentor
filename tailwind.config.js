/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': 'hsl(223, 87%, 63%)',
        'paleBlue': 'hsl(223, 100%, 88%)',
        'lightRed': 'hsl(354, 100%, 66%)',
        'gray': 'hsl(0, 0%, 59%)',
        'veryDarkBlue': 'hsl(209, 33%, 12%)',
      },
      fontSize: {
        '20px': '20px',
      },
      fontFamily: {
        'limbre': ['Libre Franklin', 'sans-serif'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}

