/**
* CLI tools for Crelan Bank
**/

import path from 'path';
import cliparse from 'cliparse';
import bamboo from '../karmaRunner';

const bambooCMD = cliparse.command('bamboo', {
  description: 'Generate mocha.json and report for continuous integration'
},
bamboo.bind(null, {options:{ci: true}}));

export default bambooCMD;
