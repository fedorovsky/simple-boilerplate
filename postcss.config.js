module.exports = () => ({
  plugins: {
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
