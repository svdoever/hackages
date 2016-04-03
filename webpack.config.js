const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');


const config = {
  entry: './tools/parser/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
