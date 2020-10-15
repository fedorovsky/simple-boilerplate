const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    hot: true,
    open: true,
    openPage: 'http://localhost:8000',
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: {
      colors: true,
      modules: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      env: true,
    },
  },
});

// https://github.com/jantimon/html-webpack-plugin/issues/218
// https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/
// https://github.com/ivarprudnikov/webpack-static-html-pages/tree/master/src
// https://github.com/erickzhao/static-html-webpack-boilerplate
