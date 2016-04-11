/**
* CLI tools: Command line tool
**/
import karma from './karma';
import eslint from './linter';
import bamboo from './bamboo';
import webpack from './webpack';
import cliparse from 'cliparse';
import watchFiles from './watchFiles';

const cliParser = cliparse.cli({
  name: 'crelan <command> [options]',
  description: 'Crelan CLI tools to build web applications',
  commands: [
    webpack,
    eslint,
    watchFiles,
    bamboo,
    karma,
  ],
  version: require('../../package.json').version
});



cliparse.parse(cliParser);

export default cliParser;
