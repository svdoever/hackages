import path from 'path';
import {entry} from './utils';

const cwd = process.cwd();

const config = {
  outputDir: path.join(cwd, 'dist'),
  mainEntry: entry(),
  nodeModules: path.join(__dirname, '../node_modules'),
  bowerComponents: path.join(cwd, 'bower_components'),
  context: cwd
};

export default config;
