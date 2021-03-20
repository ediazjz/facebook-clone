module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          "150": "#f1f2f5",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
