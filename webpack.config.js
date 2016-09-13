const path = require('path');
const webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'src'),
  style: [
    path.join(__dirname, 'node_modules', 'react-toolbox'),
    path.join(__dirname, 'app', 'main.css')
  ],
  build: path.join(__dirname, 'build')
};

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: PATHS.app
    }, {
      test: /(\.scss|\.css)$/,
      loader: 'style',
      include: PATHS.style
    }, {
      test: /(\.scss|\.css)$/,
      loader: 'css',
      query: {
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      },
      include: PATHS.style
    }, {
      test: /\.scss$/,
      loader: 'postcss',
      include: PATHS.style
    }, {
      test: /\.scss$/,
      loader: 'sass',
      include: PATHS.style
    },]
  }
};
