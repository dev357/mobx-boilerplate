const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CSSModules = true; // Disable CSSModules here

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv !== 'production';

const getPlugins = () => {
  const plugins = [];
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer({browsers: ['last 2 versions']})],
        context: '/', // Required for the sourceMap of css/sass loader
        debug: isDev,
        minimize: !isDev
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
      __DEV__: JSON.stringify(isDev)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.NoErrorsPlugin()
  );

  if (isDev) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.IgnorePlugin(/webpack-stats\.json$/)
    );
  } else {
    plugins.push(
      new CleanWebpackPlugin(['dist', 'build']),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['main', 'vendor'],
        filename: '[name].[chunkhash].js',
        minChunks: module => /node_modules/.test(module.resource)
      }),
      new ExtractTextPlugin({filename: '[name].[chunkhash].css', allChunks: true}),
      new webpack.optimize.UglifyJsPlugin({
        compress: {screw_ie8: true, warnings: false},
        output: {comments: false},
        sourceMap: false
      }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.DedupePlugin()
    );
  }

  return plugins;
};

const getEntry = () => {
  if (isDev) {
    return {
      app: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/dev-server',
        './src/index'
      ]
    };
  } else {
    return {
      app: './src/index'
    }
  }
};


module.exports = {
  stats: {children: false}, // hides the annoying "hidden-modules" spam when building
  cache: isDev,
  devtool: isDev ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  context: path.join(__dirname, '/'),
  entry: getEntry(),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: '/',
    filename: isDev ? '[name].[hash].js' : '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel',
        query: {
          cacheDirectory: isDev ? 'babel' : null,
          presets: [[
            "latest", {
              "es2015": {
                "loose": true,
                "modules": false
              }
            }],
            "stage-0",
            "react"
          ],
          plugins: [
            "transform-decorators-legacy",
            // ["transform-react-jsx", { "pragma": "h" }] // for preact
          ]
        }
      }, {
        test: /\.json$/, loader: 'json'
      }, {
        test: /\.css$/,
        loader: isDev
          ? `style!css?localIdentName=[name]__[local].[hash:base64:5]&${CSSModules ? 'modules' : ''}&sourceMap&-minimize&importLoaders=1!postcss`
          : ExtractTextPlugin.extract({fallbackLoader: 'style', loader: `css?${CSSModules ? 'modules' : ''}&sourceMap&importLoaders=1!postcss`
        }),
      },
    ]
  },
  plugins: getPlugins()
};
