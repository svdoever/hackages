const path = require('path');

const entry = path.resolve(process.cwd(), 'index.js');

const configuration = {
  devtool: 'inline-source-map',
  // context: path.resolve(process.cwd(), '/'),
  entry: entry,
  cache: false,
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    root: path.resolve(__dirname, '/'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js'],
  },
  stats: {
    colors: true,
    reasons: true,
    hash: true,
    versions: true,
    timings: true,
    chunks: true,
    chunkModules: true,
    cached: true,
    cacheAssets: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};

module.exports = configuration;
