module.exports = {
  purge: {
    layers: ['base', 'utilities'],
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          "150": "#f1f2f5",
          "input": "#eff2f5",
        },
        brand: {
          "DEFAULT": "#2e81f4",
          "dark": "#166fe5"
        }
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
