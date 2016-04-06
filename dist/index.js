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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cliparse = __webpack_require__(1);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools for Crelan Bank
	**/
	var karma = __webpack_require__(2);
	// import karma from './karma';
	// import eslint from './linter';
	// import bamboo from './bamboo';
	// import webpack from './webpack';

	// import watchFiles from './watchFiles';
	// const eslint = require('./linter');
	// const bamboo = require('./bamboo');
	// const webpack = require('./webpack');
	// const watchFiles = require('./watchFiles');

	var cliParser = _cliparse2.default.cli({
	  name: 'hackages <command> [options]',
	  description: 'hackages not hackage like Haskell',
	  commands: [karma]
	});

	// webpack,
	// eslint,
	// watchFiles,
	// bamboo

	_cliparse2.default.parse(cliParser);

	exports.default = cliParser;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("cliparse");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(3);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(1);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(4);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testCMD = _cliparse2.default.command('test', {
	  description: 'Running unit tests with Karma',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _karmaRunner2.default); /**
	                           * CLI tools 
	                           **/


	exports.default = testCMD;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(3);

	var _path2 = _interopRequireDefault(_path);

	var _karma = __webpack_require__(5);

	var _karma2 = _interopRequireDefault(_karma);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testRunner = function testRunner(params, options) {
	  return new Promise(function (resolve, reject) {
	    var _params$options = params.options;
	    var watch = _params$options.watch;
	    var ci = _params$options.ci;


	    var options = {
	      configFile: _path2.default.resolve(__dirname, './config/karma.conf.js'),
	      singleRun: !watch,
	      port: 9876,
	      reporterOptionsOuput: _path2.default.resolve(process.cwd(), 'mocha.json')
	    };

	    if (ci) {
	      options = Object.assign(options, __webpack_require__(6));
	    }

	    // Start the server and run the tests
	    new _karma2.default.Server(options, function (exitCode) {
	      if (exitCode > 0) {
	        reject(new Error('Hey, something really bad happened with your tests'));
	      } else {
	        resolve();
	      }
	    }).start();

	    return resolve();
	  });
	};

	exports.default = testRunner;

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
	var path = __webpack_require__(3);

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