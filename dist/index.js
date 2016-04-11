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

	var _linter = __webpack_require__(12);

	var _linter2 = _interopRequireDefault(_linter);

	var _bamboo = __webpack_require__(15);

	var _bamboo2 = _interopRequireDefault(_bamboo);

	var _webpack = __webpack_require__(16);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _watchFiles = __webpack_require__(20);

	var _watchFiles2 = _interopRequireDefault(_watchFiles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	* CLI tools: Command line tool
	**/


	var cliParser = _cliparse2.default.cli({
	  name: 'crelan <command> [options]',
	  description: 'Crelan CLI tools to build web applications',
	  commands: [_webpack2.default, _linter2.default, _watchFiles2.default, _bamboo2.default, _karma2.default],
	  version: __webpack_require__(21).version
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

	var _chalk = __webpack_require__(5);

	var _chalk2 = _interopRequireDefault(_chalk);

	var _karma = __webpack_require__(6);

	var _karma2 = _interopRequireDefault(_karma);

	var _webpack = __webpack_require__(7);

	var _webpack2 = _interopRequireDefault(_webpack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var karmaConfigFile = __webpack_require__(10);
	var karmaConfigCI = __webpack_require__(11);

	var testRunner = function testRunner(params, options) {
	  return new Promise(function (resolve, reject) {
	    console.log(_chalk2.default.bold.green('Testing starting...'));
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
	        console.log(_chalk2.default.bold.green('Done...'));
	      }
	    }).start();

	    return resolve();
	  });
	};

	exports.default = testRunner;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("chalk");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("karma");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var cwd = process.cwd();
	var path = __webpack_require__(2);
	var chalk = __webpack_require__(5);
	var webpack = __webpack_require__(8);
	var entry = path.resolve(cwd, 'components/main.js');
	var BowerWebpackPlugin = __webpack_require__(9);
	var nodeModules = path.resolve(__dirname, '../node_modules');

	var config = {
	  devtool: 'inline-source-map',
	  entry: entry,
	  output: {
	    filename: 'main.js',
	    path: path.join(cwd, 'dist')
	  },
	  quiet: true,
	  resolveLoader: {
	    fallback: nodeModules
	  },
	  resolve: {
	    extensions: ['', '.js', '.html', '.css']
	  },
	  stats: {
	    hash: true,
	    chunks: true,
	    cached: true,
	    colors: true,
	    reasons: true,
	    timings: true,
	    versions: true,
	    cacheAssets: true,
	    chunkModules: true
	  },
	  module: {
	    loaders: [{
	      test: /\.js$/,
	      loader: 'babel',
	      exclude: /bower_components|node_modules/,
	      plugins: ["transform-async-to-generator"],
	      query: {
	        presets: [path.join(nodeModules, 'babel-preset-es2015'), path.join(nodeModules, 'babel-preset-stage-0')]
	      }
	    }, {
	      test: /\.json$/,
	      loader: 'json'
	    }]
	  },
	  plugins: [new webpack.ResolverPlugin(new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])), new BowerWebpackPlugin({
	    modulesDirectories: ['bower_components'],
	    manifestFiles: 'bower.json',
	    includes: /\.js$/,
	    excludes: [],
	    searchResolveModulesDirectories: true
	  })]
	};

	module.exports = config;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("bower-webpack-plugin");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dd41b3760b1ff806bbc418a24b5d2a44.js";

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _eslintRunner = __webpack_require__(13);

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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eslint = __webpack_require__(14);

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
/* 14 */
/***/ function(module, exports) {

	module.exports = require("eslint");

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(17);

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(18);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(19);

	var _webpack4 = _interopRequireDefault(_webpack3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var webpackRunner = function webpackRunner(params) {
	  return params.options.watch ? (0, _webpack2.default)() : (0, _webpack4.default)();
	};

	exports.default = webpackRunner;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(7);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _webpack = __webpack_require__(8);

	var _webpack2 = _interopRequireDefault(_webpack);

	var _webpack3 = __webpack_require__(7);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _cliparse = __webpack_require__(3);

	var _cliparse2 = _interopRequireDefault(_cliparse);

	var _webpackRunner = __webpack_require__(17);

	var _webpackRunner2 = _interopRequireDefault(_webpackRunner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parsers = _cliparse2.default.parsers;


	var watchCMD = _cliparse2.default.command('watch', {
	  description: 'Watch files using webpack, babel, eslint'
	}, _webpackRunner2.default.bind(null, { options: { watch: true } }));

	exports.default = watchCMD;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = {
		"name": "crelan-cli",
		"version": "0.0.2",
		"description": "cli to build web applications at Crelan",
		"main": "bin/index.js",
		"scripts": {
			"prebamboo": "rm -rf mocha.json && npm i",
			"lint": "eslint scripts",
			"build": "webpack --config webpack.config.js",
			"watch": "webpack --config ./webpack.config.js -w",
			"runTest": "babel-node tools/exec karma",
			"bamboo": "mocha -R mocha-bamboo-reporter",
			"start": "babel-node start.js",
			"predeploy": "npm run build && cp -rf tools/config dist",
			"deploy": "node publish.js"
		},
		"bin": {
			"crelan": "bin/index.js",
			"cl": "bin/index.js"
		},
		"publishConfig": {
			"registry": "http://hn198.crelan.be:8081/nexus/content/repositories/npm-internal/"
		},
		"keywords": [
			"crelan",
			"react",
			"backbase",
			"javascript",
			"angular"
		],
		"author": "crelan team & hackages.io",
		"license": "MIT",
		"dependencies": {
			"babel-cli": "^6.6.5",
			"babel-core": "^6.7.4",
			"babel-loader": "^6.2.4",
			"babel-plugin-transform-async-to-generator": "^6.7.4",
			"babel-plugin-transform-runtime": "^6.6.0",
			"babel-polyfill": "^6.7.4",
			"babel-preset-es2015": "^6.6.0",
			"babel-preset-stage-0": "^6.5.0",
			"babel-register": "^6.7.2",
			"babel-runtime": "^6.6.1",
			"bower-webpack-plugin": "^0.1.9",
			"chai": "^3.5.0",
			"chalk": "^1.1.3",
			"cliparse": "^0.2.5",
			"eslint": "^2.5.3",
			"eslint-config-airbnb": "^6.2.0",
			"eslint-loader": "^1.3.0",
			"eslint-plugin-react": "^4.2.3",
			"estraverse": "^4.2.0",
			"estraverse-fb": "^1.3.1",
			"file-loader": "^0.8.5",
			"git-rev": "^0.2.1",
			"jasmine-core": "^2.4.1",
			"jasmine-expect": "^2.0.2",
			"jasmine-promise-matchers": "^2.0.2",
			"json-loader": "^0.5.4",
			"karma": "^0.13.22",
			"karma-babel-preprocessor": "^6.0.1",
			"karma-bamboo-reporter": "^0.1.2",
			"karma-coverage": "^0.5.5",
			"karma-jasmine": "^0.3.8",
			"karma-mocha": "^0.2.2",
			"karma-mocha-reporter": "^2.0.0",
			"karma-phantomjs-launcher": "^1.0.0",
			"karma-sourcemap-loader": "^0.3.7",
			"karma-webpack": "^1.7.0",
			"mocha": "^2.4.5",
			"mocha-bamboo-reporter": "^1.1.0",
			"npm": "^3.8.5",
			"phantomjs-prebuilt": "^2.1.6",
			"webpack": "^1.12.14",
			"webpack-bower-resolver": "0.0.1",
			"webpack-node-externals": "^1.0.0"
		},
		"devDependencies": {
			"chai": "^3.5.0"
		}
	};

/***/ }
/******/ ]);