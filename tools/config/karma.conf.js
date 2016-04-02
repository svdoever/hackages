// Karma configuration file
const path = require('path');
const webpackConfig = require('./webpack.config');

const localDeps = [
  'node_modules/jasmine-expect/dist/jasmine-matchers.js',
  'node_modules/jasmine-promise-matchers/dist/jasmine-promise-matchers.js',
].map(file => path.resolve(__dirname, file));

const externaleDeps = [
  'test/**/*.spec.js',
  'scripts/**/test/**/*.spec.js'
].map(file => path.resolve(process.cwd(), file));

// preprocessors configuration
const testsFiles = path.resolve(process.cwd(), 'test/**/*.spec.js');
const scriptsFiles = path.resolve(process.cwd(), 'scripts/**/test/**/*.spec.js');

const preprocessors = {};
preprocessors[testsFiles] = ['webpack', 'coverage'];
preprocessors[scriptsFiles] =['webpack', 'coverage'];

const DEBUG = !process.argv.includes('--release');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: localDeps.concat(externaleDeps),

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,

		webpack: webpackConfig,

		webpackMiddleware: {
        noInfo: true,
        stats: {
            colors: true
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
}
