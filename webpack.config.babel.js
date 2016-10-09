const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isProd = ENV === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css'],
    modules: [

      'node_modules'
    ],
    alias: {
      components: path.resolve(__dirname, "src/components"),		// used for tests
      styles: path.resolve(__dirname, "src/styles"),
      views: path.resolve(__dirname, "src/views"),
      lib: path.resolve(__dirname, "src/lib"),
      // 'react': 'preact-compat',
      // 'react-dom': 'preact-compat'
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-1", "react"],
          plugins: [
            "react-hot-loader/babel",
            "transform-decorators-legacy",
            // ["transform-react-jsx", { "pragma": "h" }] // for preact
          ]
        }
      }, {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[hash:base64:5]',
        ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html'
    })
  ],
};
