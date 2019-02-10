const path = require('path');

module.exports = {
  entry: './example.js',

  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },

  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};