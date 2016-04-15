/**
* CLI tools: Generate report for Continuous Integration
**/
import cliparse from 'cliparse';
import ci from '../karmaRunner';

const ciCMD = cliparse.command('ci', {
  description: 'Generate mocha.json and report for continuous integration',
},
ci.bind(null, { options: { ci: true } }));

export default ciCMD;
