const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    watchFiles: ['src/**/*'],
    open: true,
  },
});

// https://github.com/jantimon/html-webpack-plugin/issues/218
// https://github.com/ivarprudnikov/webpack-static-html-pages/tree/master/src
// https://github.com/erickzhao/static-html-webpack-boilerplate
