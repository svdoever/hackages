import karma from 'karma';
import path from 'path';

const testRunner = (params) => new Promise((resolve, reject) => {
  const {watch} = params.options;

  const options = {
    configFile: path.resolve(__dirname, '../karma.conf.js'),
    singleRun: !watch,
    port: 9876,
  };

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
