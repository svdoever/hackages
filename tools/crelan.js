/**
* CLI tools for Crelan Bank
**/

import path from 'path';
import cliparse from 'cliparse';
import karma from './karma';
import build from './build';
import lint from './lint';

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

const buildCMD = cliparse.command('build', {
  description: 'Build your static assets using Webpack',
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch'
    }),
  ]
},
build);

const testCMD = cliparse.command('test', {
  description: 'Running Unit Tests with Karma',
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch'
    }),
  ]
},
karma);


const cliParser = cliparse.cli({
  name: 'crelan',
  description: 'Crelan CLI tools',
  commands: [testCMD, buildCMD, lintCMD]
});

cliparse.parse(cliParser);

export default cliParser;
