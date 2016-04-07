import path from 'path';
import chalk from 'chalk';
import karma from 'karma';
import webpackConfig from './config/webpack.config';
const karmaConfigFile = require('file!./config/karma.conf.js');
const karmaConfigCI = require('./config/karma.conf.ci');

const testRunner = (params, options) => new Promise((resolve, reject) => {
  console.log(chalk.bold.green('Testing starting...'));
  const {watch, ci} = params.options;

  let options = {
    configFile: path.resolve(__dirname, karmaConfigFile),
    webpack: webpackConfig,
    singleRun: !watch,
    reporterOptionsOuput: path.resolve(process.cwd(), 'mocha.json')
  };

  if (ci) {
    options = Object.assign(options, karmaConfigCI);
  }

  // Start the server and run the tests
  new karma.Server(options, function(exitCode) {
    if (exitCode > 0) {
      reject(new Error('Hey, something really bad happened with your tests'));
    } else {
      resolve();
      console.log(chalk.bold.green('Done...'));
    }
  }).start();

  return resolve();
});

export default testRunner;
