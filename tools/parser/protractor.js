/**
* CLI tools: Running end to end test with protractor
**/

import path from 'path';
import exec from './exec';
import cliparse from 'cliparse';

const protractor = () =>{
  exec('npm run protractor');
};


const testCMD = cliparse.command('e2e', {
  description: 'Running end to end tests with protractor'
},
protractor);

export default testCMD;
