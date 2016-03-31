import path from 'path';
import cliparse from 'cliparse';
import build from '../webpackRunner';

const {parsers} = cliparse;

const watchCMD = cliparse.command('watch', {
  description: 'Watch files using webpack, babel, eslint'
},
build.bind(null, {options:{watch: true}}));

export default watchCMD;
