'use strict';

// Karma configuration file;
var path = require('path');
var context = process.cwd();
var nodeModules = path.resolve(__dirname, '../node_modules');

var localDeps = ['jasmine-expect/dist/jasmine-matchers.js', 'jasmine-promise-matchers/dist/jasmine-promise-matchers.js'].map(function (file) {
  return path.join(nodeModules, file);
});

var externaleDeps = ['test/*.spec.js', 'test/**/*.spec.js', 'scripts/**/test/**/*.spec.js'].map(function (file) {
  return path.join(context, file);
});

// preprocessors configuration
var testsFiles = path.resolve(context, 'test/**/*.spec.js');
var scriptsFiles = path.resolve(context, 'scripts/**/test/**/*.spec.js');

var preprocessors = {};
preprocessors[testsFiles] = ['webpack', 'coverage'];
preprocessors[scriptsFiles] = ['webpack', 'coverage'];

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: localDeps.concat(externaleDeps),
    preprocessors: preprocessors,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true
      }
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};