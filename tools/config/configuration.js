import path from 'path';
import { entry } from './utils';

const cwd = process.cwd();

const config = {
  outputDir: path.join(cwd, 'dist'),
  mainEntry: entry(),
  nodeModules: path.join(__dirname, '../node_modules'),
  bowerComponents: path.join(cwd, 'bower_components'),
  context: cwd,
};

config.npmCMD = `${config.nodeModules}/npm/bin/npm-cli.js`;
config.liveCMD = `${config.nodeModules}/live-server/live-server.js`;
config.deployCMD = `${config.nodeModules}/surge/lib/cli.js`;

export default config;
