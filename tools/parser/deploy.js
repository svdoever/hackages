/**
* Hackages CLI tools: deploy static assets with surge
**/
import exec from './exec';
import cliparse from 'cliparse';
import config from '../config/configuration';

const deployCMD = cliparse.command('deploy', {
  description: 'Deploy static assets quickly for immediate feedback',
},
exec.bind(null, config.deployCMD));

export default deployCMD;
