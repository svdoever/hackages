const path = require('path');
const chalk = require('chalk');
const pathExists = require('path-exists');

const testFolder = path.join(__dirname, 'est/e2e');

if(!pathExists.sync(testFolder)){
  console.log(chalk.red('There are no test folder with end to end tests setup'));
  process.exit(1);
}

console.log(chalk.green('Starting end to end tests'));

const pattern = testFolder + '/**/*.spec.js';


exports.config = {
 seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: [pattern]
};

