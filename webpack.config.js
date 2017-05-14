var path = require('path');
var webpack = require('webpack');

var IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: IS_PRODUCTION ? 'cheap-module-source-map' : 'eval',
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
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          }
        ]
      }
    ]
  }
};