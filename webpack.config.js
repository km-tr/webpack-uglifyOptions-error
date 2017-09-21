const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'drop.console.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
      },
    })
  ],
};