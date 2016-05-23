/**
 * CLI tools: Starting a live-server instance
 **/
import cliparse from 'cliparse';
import exec from './exec';
import config from '../config/configuration';

const liveCMD = cliparse.command('live', {
  description: 'Starting local server on port 8080',
},
exec.bind(null, config.liveCMD));

export default liveCMD;
