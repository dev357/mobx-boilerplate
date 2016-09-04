const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const compiler = webpack(config);

// We give notice in the terminal when it starts bundling
let startTime = Date.now();
compiler.plugin('compile', function () {
  startTime = Date.now();
  console.log('Bundling...');
});
compiler.plugin('done', function () {
  console.log('Done! took', Date.now() - startTime, 'ms');
});

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  stats: {
    colors: true,
    version: false
  }
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
