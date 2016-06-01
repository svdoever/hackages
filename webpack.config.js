const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const config = {
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  entry: './tools/parser/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [],
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      }
    ]
  }
};

config.externals = fs.readdirSync("node_modules")
  .reduce(function(acc, mod) {
    if (mod === ".bin") {
      return acc
    }

    acc[mod] = "commonjs " + mod
    return acc
  }, {});

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
