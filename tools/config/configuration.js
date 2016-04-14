import path from 'path';

const cwd = process.cwd();

const config = {
  outputDir: path.join(cwd, 'dist'),
  mainEntry: path.join(cwd, 'index.js'),
  nodeModules: path.join(__dirname, '../node_modules'),
  bowerComponents: path.join(cwd, 'bower_components'),
  context: cwd
};

export default config;
