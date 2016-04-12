import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import pathExists from 'path-exists';
import BowerWebpackPlugin from 'bower-webpack-plugin';
import {touch} from 'shelljs';
import {entry} from './utils';


const cwd = process.cwd();
const nodeModules = path.resolve(__dirname, '../node_modules');


const config = {
  devtool: 'inline-source-map',
  entry: entry(),
  output: {
    filename: 'index.js',
    path: path.join(cwd, 'dist'),
  },
  quiet: true,
  resolveLoader: {
    fallback: nodeModules
  },
  resolve: {
    extensions: ['', '.js', '.html', '.css'],
  },
  stats: {
    chunks: false,
    colors: true,
    reasons: true,
    timings: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
	exclude: /bower_components|node_modules/,
        plugins: ["transform-async-to-generator"],
        query: {
          presets: [
            path.join(nodeModules, 'babel-preset-es2015'),
            path.join(nodeModules, 'babel-preset-stage-0'),
          ]
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
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
