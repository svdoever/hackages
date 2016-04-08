/**
* CLI tools: Command line tool
**/
import sass from './sass';
import karma from './karma';
import eslint from './linter';
import bamboo from './bamboo';
import webpack from './webpack';
import cliparse from 'cliparse';
import watchFiles from './watchFiles';

const cliParser = cliparse.cli({
  name: 'hackages <command> [options]',
  description: 'hackages not hackage like Haskell',
  commands: [
    webpack,
    eslint,
    watchFiles,
    bamboo,
    karma,
    sass
  ]
});



cliparse.parse(cliParser);

export default cliParser;
