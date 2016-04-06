// Karma configuration file
const path = require('path');
const context = process.cwd();
const webpackConfig = require('./webpack.config');
const nodeModules = path.resolve(__dirname, '../../node_modules');

const localDeps = [
  'jasmine-expect/dist/jasmine-matchers.js',
  'jasmine-promise-matchers/dist/jasmine-promise-matchers.js',
].map(file => path.join(nodeModules, file));

const externaleDeps = [
  'test/*.spec.js',
  'test/**/*.spec.js',
  'scripts/**/test/**/*.spec.js'
].map(file => path.join(context, file));

// preprocessors configuration
const testsFiles = path.resolve(context, 'test/**/*.spec.js');
const scriptsFiles = path.resolve(context, 'scripts/**/test/**/*.spec.js');

const preprocessors = {};
preprocessors[testsFiles] = ['webpack', 'coverage'];
preprocessors[scriptsFiles] = ['webpack', 'coverage'];

const DEBUG = !process.argv.includes('--release');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: localDeps.concat(externaleDeps),
    preprocessors: preprocessors,
		webpack: webpackConfig,
		webpackMiddleware: {
        noInfo: true,
        stats: {
            colors: true
        }
    },
    reporters: ['coverage', 'mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
}
