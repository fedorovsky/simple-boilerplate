module.exports = () => ({
  ident: 'postcss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 3,
      browsers: ['last 5 versions', '> 5%'],
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    },
    'cssnano': {},
  },
});

// https://preset-env.cssdb.org/features
