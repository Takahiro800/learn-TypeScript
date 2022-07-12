var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'bundle.js',
  },
  // Babelを使うように設定
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  devtool: 'source-map', // ソースマップ
};
