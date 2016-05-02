var webpack = require('webpack')
var path = require('path')

// var BUILD_DIR = path.resolve(__dirname, 'src/client/public')
// var APP_DIR = path.resolve(__dirname, 'src/client/app')

var config = {
  entry: {
    app: './app.js',
  },
  target: 'web',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolver: {
    extensions: ['.js']
  }
}

module.exports = config
