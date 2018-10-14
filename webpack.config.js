const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    client: path.resolve(__dirname, 'src/client/index.js'),
    server: path.resolve(__dirname, 'src/server/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ],
  },
};
