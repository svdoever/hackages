import path from 'path';
import webpack from 'webpack';
import BowerWebpackPlugin from 'bower-webpack-plugin';
import config from './configuration';

const exclude = ['node_modules', 'bower_components'];

const webpackConfig = {
  devtool: 'source-map',
  entry: config.mainEntry,
  output: {
    filename: 'index.js',
    path: config.outputDir,
  },
  resolveLoader: {
    fallback: config.nodeModules,
  },
  resolve: {
    modulesDirectories: [
      '/Users/Serge/projects/serge/hackages-demo/node_modules',
    ],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts', '.html', '.css'],
  },
  stats: {
    chunks: false, // removed noise made by webpack while transpiling
    colors: true,  // green color, yeah green is good
    timings: true,
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        plugins: ['transform-async-to-generator'],
        query: {
          presets: [
            path.join(config.nodeModules, 'babel-preset-es2015'),
            path.join(config.nodeModules, 'babel-preset-react'),
            path.join(config.nodeModules, 'babel-preset-stage-0'),
          ],
        },
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      //   loader: 'url',
      //   query: {
      //     name: '[hash].[ext]',
      //     limit: 10000,
      //   },
      // },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url?name=[path][name].[ext]',
      },

      {
        test: /\.(ttf|eot)$/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'autoprefixer'],
        exclude,
      },
      {
        test: /\.html$/,
        loader: 'html!html-minify',
        exclude,
      },
    ],
  },
  ts: { // overrides on existing tsconfig.json
    compilerOptions: {
      target: 'es5',
      jsx: 'react',
      noEmit: false, // override "noEmit: true" in tsconfig.json, because generating js
                     // files from editor can interfere
      sourceMap: true,
    },
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: 'bower.json',
      includes: /\.js$/,
      searchResolveModulesDirectories: true,
    }),
  ],
};

export default webpackConfig;
