import path from 'path';
import karma from 'karma';
import ciConfiguration from '../karma.conf.ci';

const testRunner = (params, options) => new Promise((resolve, reject) => {
  const {watch, ci} = params.options;

  let options = {
    configFile: path.resolve(__dirname, '../karma.conf.js'),
    singleRun: !watch,
    port: 9876,
    reporterOptionsOuput: path.resolve(process.cwd(), 'mocha.json')
  };

  if (ci) {
    options = Object.assign(options, ciConfiguration);
  }

  // Start the server and run the tests
  new karma.Server(options, function(exitCode) {
    if (exitCode > 0) {
      reject(new Error('Hey, something really bad happened with your tests'));
    } else {
      resolve();
    }
  }).start();

  return resolve();
});

export default testRunner;
