module.exports = () => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    'cssnano': {},
    'postcss-preset-env': {
      stage: 3,
      browsers: ['last 5 versions', '> 5%'],
      features: {
        'custom-media-queries': true,
      },
    },
  },
});

// https://preset-env.cssdb.org/features
