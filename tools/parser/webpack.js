import path from 'path';
import cliparse from 'cliparse';
import build from '../webpackRunner';

const {parsers} = cliparse;

const buildCMD = cliparse.command('build', {
  description: 'Build all your static assets using Webpack',
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch of js files'
    }),
  ]
},
build);

export default buildCMD;
