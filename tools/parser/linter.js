/**
* CLI tools: Linter configuration
**/
import cliparse from 'cliparse';
import lint from '../eslintRunner';

const lintCMD = cliparse.command('lint', {
  description: 'Lint JS file following airBnB coding guidelines by default',
  args: [
    cliparse.argument('source', {
      description: 'Files or directory to be parsed',
    }),
  ],
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch',
    }),
  ],
},
lint);

export default lintCMD;
