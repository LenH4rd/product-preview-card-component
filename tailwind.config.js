/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      width: {
        '600': '37.5rem',
      },
      colors: {
        'Dark-cyan': 'hsl(158, 36%, 37%)',
        'Cream': 'hsl(30, 38%, 92%)',
        'Very-dark-blue': 'hsl(212, 21%, 14%)',
        'Dark-grayish-blue': 'hsl(228, 12%, 48%)',
        'hover-cyan': 'hsl(156, 42%, 18%)',
      },

      fontSize: {
        'paragraph': '0.875rem',
        'heading': '2.125rem',
      },

      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
}

