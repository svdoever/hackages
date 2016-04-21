import cliparse from 'cliparse';
import build from '../webpackRunner';

const debugCMD = cliparse.command('debug', {
  description: 'Get a better a description of your errors from webapck',
},
build.bind(null, { options: { debug: true } }));

export default debugCMD;
