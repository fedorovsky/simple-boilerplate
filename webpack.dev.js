const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8000,
    disableHostCheck: true,
    stats: {
      colors: true,
      modules: false,
      chunks: false,
      chunkGroups: false,
      chunkModules: false,
      env: true,
    },
  },
  plugins: [new OpenBrowserPlugin({ url: 'http://localhost:8000' })],
});

// https://github.com/jantimon/html-webpack-plugin/issues/218
// https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/
// https://github.com/ivarprudnikov/webpack-static-html-pages/tree/master/src
// https://github.com/erickzhao/static-html-webpack-boilerplate
