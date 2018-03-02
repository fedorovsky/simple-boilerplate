const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
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
              modules: true,
              localIdentName: '[path]-[local]-[hash:base64:8]',
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-smart-import'),
                require('postcss-cssnext')({
                  features: {
                    autoprefixer: true,
                  },
                }),
                require('postcss-nested'),
                require('postcss-flexbugs-fixes'),
              ],
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      modules: false,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  resolve: {
    alias: {
      'react-select-friendly': path.join(__dirname, '.', 'src', 'index'),
    },
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
};
