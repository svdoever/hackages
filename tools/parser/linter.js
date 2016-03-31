/**
* CLI tools for Crelan Bank
**/

import path from 'path';
import cliparse from 'cliparse';
import lint from '../eslintRunner';

const {parsers} = cliparse;

const lintCMD = cliparse.command('lint', {
  description: 'Lint JS file following airBnB coding guidelines by default',
  args: [
    cliparse.argument("source", {
      description: "Files or directory to be parsed",
      parser (value) {
        console.log(value)
      }
    }),
  ],
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch'
    }),
  ]
},
lint);

export default lintCMD;
