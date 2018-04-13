const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: false,
              localIdentName: '[path]-[local]-[hash:base64:8]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              config: {
                path: 'postcss.config.js',
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000,
    disableHostCheck: true,
    stats: {
      colors: true,
      modules: false,
    },
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
    alias: {
      'react-select-friendly': path.join(__dirname, '.', 'src', 'index'),
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:9000' }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'public/index.html'),
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};
