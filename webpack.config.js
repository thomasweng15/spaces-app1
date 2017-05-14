var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/main.js',
  output: { 
    path: path.join(__dirname, 'public'), 
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        rules: [
          {
            test: /\.scss$/,
            use: [ 
              { loader: 'style-loader' },
              { loader: 'css-loader' }, 
              { loader: 'sass-loader' }
            ]
          }
        ]
      }
    ]
  }
};