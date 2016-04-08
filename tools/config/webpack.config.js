const cwd = process.cwd();
const path = require('path');
const webpack = require('webpack');
const entry = path.resolve(cwd, 'index.js');
const BowerWebpackPlugin = require('bower-webpack-plugin');
const nodeModules = path.resolve(__dirname, '../node_modules');
const scss = path.join(cwd, "scss/style.scss");

console.log(scss);

const config = {
  devtool: 'inline-source-map',
  entry: {
    style: scss
  },
  output: {
    filename: '[name].css',
    path: path.join(cwd, 'css'),
  },
  resolveLoader: {
    fallback: nodeModules
  },
  resolve: {
    extensions: ['', '.js', '.html', '.css'],
  },
  stats: {
    hash: true,
    chunks: true,
    cached: true,
    colors: true,
    reasons: true,
    timings: true,
    versions: true,
    cacheAssets: true,
    chunkModules: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        plugins: ["transform-async-to-generator"],
        query: {
          presets: [
            path.join(nodeModules, 'babel-preset-es2015'),
            path.join(nodeModules, 'babel-preset-stage-0'),
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'bourbon-sass'],
        exclude: /(node_modules|bower_components)/,
      },
    ],
    sassLoader: {
      includePaths: [scss],
    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles:      'bower.json',
      includes:           /\.js$/,
      excludes:           [],
      searchResolveModulesDirectories: true
    })
  ]
};

module.exports = config;
