const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const templateParameters = require('./src/template-parameters.js');

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/js/index.js', './src/css/style.css'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
  },
  optimization: {
    noEmitOnErrors: true,
    namedModules: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js',
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/views'),
        use: ['raw-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: './public',
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
  plugins: [
    new webpack.LoaderOptionsPlugin({ options: {} }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:8000' }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/fonts'),
        to: path.resolve(__dirname, 'public/fonts'),
      },
      {
        from: path.resolve(__dirname, 'src/img'),
        to: path.resolve(__dirname, 'public/img'),
      },
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'public/'),
      },
    ]),
    new HtmlWebpackPlugin({
      inject: true,
      title: 'Home Page',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: path.resolve(__dirname, 'public/index.html'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters,
      template: path.resolve(__dirname, 'src/404.html'),
      filename: path.resolve(__dirname, 'public/404.html'),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      templateParameters,
      template: path.resolve(__dirname, 'src/500.html'),
      filename: path.resolve(__dirname, 'public/500.html'),
    }),
  ],
};

// https://github.com/jantimon/html-webpack-plugin/issues/218
// https://extri.co/2017/07/11/generating-multiple-html-pages-with-htmlwebpackplugin/
// https://github.com/ivarprudnikov/webpack-static-html-pages/tree/master/src
