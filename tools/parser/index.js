/**
* CLI tools for Crelan Bank
**/
import karma from './karma';
import eslint from './linter';
import bamboo from './bamboo';
import webpack from './webpack';
import cliparse from 'cliparse';
import watchFiles from './watchFiles';

const cliParser = cliparse.cli({
  name: 'Crelan',
  description: 'Crelan CLI tools',
  commands: [
    karma,
    webpack,
    eslint,
    watchFiles,
    bamboo
  ]
});

cliparse.parse(cliParser);

export default cliParser;
