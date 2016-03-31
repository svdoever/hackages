/**
* Lint your code all the time and let's write cleaner code
**/

import eslint from 'eslint';
const CLIEngine = eslint.CLIEngine;

const linter = (params) => {
  console.log(params);
  return false;
 return new Promise((resolve, reject) => {
   const cli = new CLIEngine({
     envs: ['browser', 'node'],
   });

   const report = cli.executeOnFiles([...params.options.source])

   return resolve(CLIEngine.getErrorResults(report.results));
 });
}

export default linter;
