module.exports = () => ({
  plugins: {
    'stylelint': {},
    'postcss-smart-import': {},
    'postcss-cssnext': {
      features: {
        autoprefixer: true,
      },
    },
    'postcss-nested': {},
    'postcss-flexbugs-fixes': {},
  },
});
