// Karma configuration file;
const path = require('path');
const context = process.cwd();
const nodeModules = path.resolve(__dirname, '../node_modules');

const localDeps = [
  'jasmine-expect/dist/jasmine-matchers.js',
  'jasmine-promise-matchers/dist/jasmine-promise-matchers.js',
].map(file => path.join(nodeModules, file));

const externaleDeps = [
  'test/*.spec.js',
  'test/**/*.spec.js',
  'scripts/**/test/**/*.spec.js',
].map(file => path.join(context, file));

const files = localDeps.concat(externaleDeps);
const reporters = ['mocha', 'coverage'];

// preprocessors configuration
const testsFiles = path.resolve(context, 'test/**/*.spec.js');
const scriptsFiles = path.resolve(context, 'scripts/**/test/**/*.spec.js');

// Preprocessors and plugins: webpack and coverage
const preprocessors = {};
const plugins = ['webpack', 'coverage'];
preprocessors[testsFiles] = plugins;
preprocessors[scriptsFiles] = plugins;

module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files,
    preprocessors,
    webpackMiddleware: {
      noInfo: true,
      stats: {
        colors: true,
      },
    },
    reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
  });
};
