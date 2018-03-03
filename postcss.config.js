module.exports = () => ({
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: true,
      },
    }),
    require('postcss-nested'),
    require('postcss-flexbugs-fixes'),
  ],
});
