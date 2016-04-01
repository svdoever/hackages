// Karma configuration file
const path = require('path');
const webpackConfig = require('./webpack.config');


module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha'],

    files: ['test/*.spec.js'],

    preprocessors: {
      'test/*.spec.js': ['webpack', 'coverage']
    },

    webpack: webpackConfig,

    plugins: ['karma-mocha', 'karma-mocha-reporter', 'karma-bamboo-reporter',, 'karma-phantomjs-launcher', 'karma-webpack', 'karma-coverage'],

    reporters: ['bamboo', 'mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: true,

    concurrency: Infinity
  });
}
