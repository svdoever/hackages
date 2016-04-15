/**
* Hackages CLI tools: Starting a live-server instance
**/
import cliparse from 'cliparse';
import exec from './exec';

const liveCMD = cliparse.command('live', {
  description: 'Starting local server on port 8000'
},
exec.bind(null, 'live-server'));

export default liveCMD;
