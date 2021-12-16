module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './pages/**/*.vue'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'site-main': '#6F64F8',
        'site-gray': '#EDEDED'
      },
      boxShadow: {
        default: '0px 2px 8px rgba(0, 0, 0, 0.135216)'
      }
    }
  },
  variants: {
    extend: {}
  }
  // plugins: [
  //   require('@tailwindcss/aspect-ratio')
  // ]
};
