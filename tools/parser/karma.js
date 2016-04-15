/**
 * CLI tools: Testing with Karma
 **/
import cliparse from 'cliparse';
import karma from '../karmaRunner';

const testCMD = cliparse.command('test', {
  description: 'Running unit tests with Karma',
  options: [
    cliparse.flag('watch', {
      aliases: ['w'],
      description: 'Enable auto watch',
    }),
  ],
},
karma);

export default testCMD;
