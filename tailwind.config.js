module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#DDDAD5'
      },
      fontFamily: {
        'body': ['Bilo', 'sans-serif'],
        'title': ['Athelas', 'sans-serif']
      },
      gridTemplateColumns: {
        'tradition': '52.60vw 1fr',
        'our': '1fr 66%',
        'production': '1fr 56.77vw',
      },
      padding: {
        '117': '117px',
        '113': '113px',
        '100': '100px',
        '90': '90px',
        '83': '83px',
        '69': '69px',
        '32': '32px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}