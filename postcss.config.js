module.exports = () => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    cssnano: {},
    'postcss-preset-env': {
      features: {
        'custom-media-queries': true,
      },
    },
  },
});

// https://preset-env.cssdb.org/features
