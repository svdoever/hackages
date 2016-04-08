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

	var _karma = __webpack_require__(1);

	var _karma2 = _interopRequireDefault(_karma);

	var _linter = __webpack_require__(11);

	var _linter2 = _interopRequireDefault(_linter);

	var _bamboo = __webpack_require__(14);

	var _bamboo2 = _interopRequireDefault(_bamboo);

	var _webpack = __webpack_require__(15);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchFiles = __webpack_require__(19);

	var _watchFiles2 = _interopRequireDefault(_watchFiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Command line tool
	**/


	var cliParser = _cliparse2.default.cli({
	  name: 'hackages <command> [options]',
	  description: 'hackages not hackage like Haskell',
	  commands: [_webpack2.default, _linter2.default, _watchFiles2.default, _bamboo2.default, _karma2.default]
	});

	_cliparse2.default.parse(cliParser);

	exports.default = cliParser;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

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
	                           * CLI tools: Testing with Karma
	                           **/


	exports.default = testCMD;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("cliparse");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _karma = __webpack_require__(5);

	var _karma2 = _interopRequireDefault(_karma);

	var _webpack = __webpack_require__(6);

	var _webpack2 = _interopRequireDefault(_webpack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var karmaConfigFile = __webpack_require__(9);
	var karmaConfigCI = __webpack_require__(10);

	var testRunner = function testRunner(params, options) {
	  return new Promise(function (resolve, reject) {
	    var _params$options = params.options;
	    var watch = _params$options.watch;
	    var ci = _params$options.ci;


	    var options = {
	      configFile: _path2.default.resolve(__dirname, karmaConfigFile),
	      webpack: _webpack2.default,
	      singleRun: !watch,
	      reporterOptionsOuput: _path2.default.resolve(process.cwd(), 'mocha.json')
	    };

	    if (ci) {
	      options = Object.assign(options, karmaConfigCI);
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

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _bowerWebpackPlugin = __webpack_require__(8);

	var _bowerWebpackPlugin2 = _interopRequireDefault(_bowerWebpackPlugin);

	var _configuration = __webpack_require__(21);

	var _configuration2 = _interopRequireDefault(_configuration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackConfig = {
	  devtool: 'source-map',
	  entry: _configuration2.default.mainEntry,
	  output: {
	    filename: 'index.js',
	    path: _configuration2.default.outputDir
	  },
	  resolveLoader: {
	    fallback: _configuration2.default.nodeModules
	  },
	  resolve: {
	    extensions: ['', '.jsx', '.js', '.html', '.css']
	  },
	  stats: {
	    chunks: false, // removed noise made by webpack while transpiling
	    colors: true, // green color, yeah green is good
	    timings: true
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loader: 'babel',
	      exclude: /(node_modules|bower_components)/,
	      plugins: ["transform-async-to-generator"],
	      query: {
	        presets: [_path2.default.join(_configuration2.default.nodeModules, 'babel-preset-es2015'), _path2.default.join(_configuration2.default.nodeModules, 'babel-preset-react'), _path2.default.join(_configuration2.default.nodeModules, 'babel-preset-stage-0')]
	      }
	    }]
	  },
	  plugins: [new _webpack2.default.ResolverPlugin(new _webpack2.default.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new _bowerWebpackPlugin2.default({
	    modulesDirectories: ['bower_components'],
	    manifestFiles: 'bower.json',
	    includes: /\.js$/,
	    // excludes:           [],
	    searchResolveModulesDirectories: true
	  })]
	};

	exports.default = webpackConfig;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("bower-webpack-plugin");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4d3f5940756a76922d11c74467aa8d4e.js";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Karma configuration for ci
	var path = __webpack_require__(2);
	var context = path.resolve(process.cwd(), 'report');

	var configuration = {
	  coverageReporter: {
	    type: 'lcovonly',
	    dir: context,
	    subdir: '.',
	    file: 'lcov.dat'
	  },
	  reporters: ['progress', 'bamboo', 'coverage'],
	  browsers: ['PhantomJS'],
	  singleRun: false
	};

	exports.default = configuration;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _eslintRunner = __webpack_require__(12);

	var _eslintRunner2 = _interopRequireDefault(_eslintRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers; /**
	                                          * CLI tools for Crelan Bank
	                                          **/

	var lintCMD = _cliparse2.default.command('lint', {
	  description: 'Lint JS file following airBnB coding guidelines by default',
	  args: [_cliparse2.default.argument("source", {
	    description: "Files or directory to be parsed",
	    parser: function parser(value) {
	      console.log(value);
	    }
	  })],
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch'
	  })]
	}, _eslintRunner2.default);

	exports.default = lintCMD;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eslint = __webpack_require__(13);

	var _eslint2 = _interopRequireDefault(_eslint);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
	                                                                                                                                                                                                    * Lint your code all the time and let's write cleaner code
	                                                                                                                                                                                                    **/

	var CLIEngine = _eslint2.default.CLIEngine;

	var linter = function linter(params) {
	  console.log(params);
	  return false;
	  return new Promise(function (resolve, reject) {
	    var cli = new CLIEngine({
	      envs: ['browser', 'node']
	    });

	    var report = cli.executeOnFiles([].concat(_toConsumableArray(params.options.source)));

	    return resolve(CLIEngine.getErrorResults(report.results));
	  });
	};

	exports.default = linter;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("eslint");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _karmaRunner = __webpack_require__(4);

	var _karmaRunner2 = _interopRequireDefault(_karmaRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bambooCMD = _cliparse2.default.command('bamboo', {
	  description: 'Generate mocha.json and report for continuous integration'
	}, _karmaRunner2.default.bind(null, { options: { ci: true } })); /**
	                                                                 * CLI tools for Crelan Bank
	                                                                 **/

	exports.default = bambooCMD;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(16);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers;


	var buildCMD = _cliparse2.default.command('build', {
	  description: 'Build all your static assets using Webpack',
	  options: [_cliparse2.default.flag('watch', {
	    aliases: ['w'],
	    description: 'Enable auto watch of js files'
	  })]
	}, _webpackRunner2.default);

	exports.default = buildCMD;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(17);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(18);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackRunner = function webpackRunner(params) {
	  return params.options.watch ? (0, _webpack2.default)() : (0, _webpack4.default)();
	};

	exports.default = webpackRunner;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(6);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Watch all the files
	**/
	var watch = function watch() {
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      if (error) {
	        return reject(error);
	      }
	      console.log(stats.toString(_webpack4.default.stats));
	      return resolve();
	    };
	    (0, _webpack2.default)(_webpack4.default).watch({}, handler);
	  });
	};

	exports.default = watch;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(6);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* Create application bundles from the source file
	**/

	var bundle = function bundle() {
	  return new Promise(function (resolve, reject) {
	    var handler = function handler(error, stats) {
	      if (error) {
	        return reject(error);
	      }
	      console.log(stats.toString(_webpack4.default.stats));
	      return resolve();
	    };

	    (0, _webpack2.default)(_webpack4.default).run(handler);
	  });
	};

	exports.default = bundle;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(16);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers;


	var watchCMD = _cliparse2.default.command('watch', {
	  description: 'Watch files using webpack, babel, eslint'
	}, _webpackRunner2.default.bind(null, { options: { watch: true } }));

	exports.default = watchCMD;

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cwd = process.cwd();

	var config = {
	  outputDir: _path2.default.join(cwd, 'dist'),
	  mainEntry: _path2.default.join(cwd, 'index.js'),
	  nodeModules: _path2.default.join(__dirname, '../node_modules'),
	  bowerComponents: _path2.default.join(cwd, 'bower_components'),
	  context: cwd
	};

	exports.default = config;

/***/ }
/******/ ]);