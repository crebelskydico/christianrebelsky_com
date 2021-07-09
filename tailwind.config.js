module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4A5865',
      },
      gridTemplateRows: {
        content: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
