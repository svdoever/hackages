/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* CLI tools for Crelan Bank
	**/
	// import karma from './karma';
	// import eslint from './linter';
	// import bamboo from './bamboo';
	// import webpack from './webpack';
	// import cliparse from 'cliparse';
	// import watchFiles from './watchFiles';
	var karma = __webpack_require__(1);
	// const eslint = require('./linter');
	// const bamboo = require('./bamboo');
	// const webpack = require('./webpack');
	var cliparse = __webpack_require__(2);
	// const watchFiles = require('./watchFiles');

	var cliParser = cliparse.cli({
	  name: 'hackages <command> [options]',
	  description: 'hackages not hackage like Haskell',
	  commands: [karma]
	});

	// webpack,
	// eslint,
	// watchFiles,
	// bamboo

	cliparse.parse(cliParser);

	module.exports = cliParser;
	// export default cliParser;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	* CLI tools for Crelan Bank
	**/

	// import path from 'path';
	// import cliparse from 'cliparse';
	// import karma from '../karmaRunner';
	var cliparse = __webpack_require__(2);
	var karma = __webpack_require__(3);

	var testCMD = cliparse.command('test', {
	  description: 'Running unit tests with Karma',
	  options: [cliparse.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, karma);

	module.exports = testCMD;

	// export default testCMD;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("cliparse");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import path from 'path';
	// import karma from 'karma';
	var path = __webpack_require__(4);
	var karma = __webpack_require__(5);

	// const configFile = require('file!./config/karma.conf.js');

	// console.log(path.resolve(__dirname, 'dist', configFile));

	var testRunner = function testRunner(params, options) {
	  return new Promise(function (resolve, reject) {
	    var _params$options = params.options;
	    var watch = _params$options.watch;
	    var ci = _params$options.ci;


	    var options = {
	      // configFile: path.resolve(__dirname, './dist', configFile),
	      configFile: path.resolve(__dirname, './config/karma.conf.js'),
	      singleRun: !watch,
	      port: 9876,
	      reporterOptionsOuput: path.resolve(process.cwd(), 'mocha.json')
	    };

	    if (ci) {
	      options = Object.assign(options, __webpack_require__(6));
	    }

	    // Start the server and run the tests
	    new karma.Server(options, function (exitCode) {
	      if (exitCode > 0) {
	        reject(new Error('Hey, something really bad happened with your tests'));
	      } else {
	        resolve();
	      }
	    }).start();

	    return resolve();
	  });
	};

	module.exports = testRunner;
	// export default testRunner;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("karma");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Karma configuration for ci
	var path = __webpack_require__(4);

	var configuration = {
	  coverageReporter: {
	    type: 'lcovonly',
	    dir: path.resolve(process.cwd(), 'report'),
	    subdir: '.',
	    file: 'lcov.dat'
	  },
	  reporters: ['progress', 'bamboo', 'coverage'],
	  browsers: ['PhantomJS'],
	  singleRun: true
	};

	exports.default = configuration;

/***/ }
/******/ ]);