module.exports = () => ({
  plugins: {
    'postcss-smart-import': {},
    'postcss-nested': {},
    'postcss-flexbugs-fixes': {},
    'postcss-cssnext': {
      features: {
        autoprefixer: true,
        customProperties: {
          variables: {
            mainColor: 'violet',
          },
        },
        customMedia: {
          extensions: {
            'xs-only': 'only screen and (max-width: 575px)',
            'sm-only': 'only screen and (min-width: 576px) and (max-width: 1024px)',
            'md-only': 'only screen and (min-width: 1025px) and (max-width: 1440px)',
            'lg-only': 'only screen and (min-width: 1441px)',
          },
        },
      },
    },
  },
});
