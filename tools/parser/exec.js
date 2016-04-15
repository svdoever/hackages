/**
* Hackages CLI tools: execute native commands using child process 
**/
import spawn from 'child_process';
import config from '../config/configuration';

const exec = (command) => new Promise((resolve, reject)=>{
  spawn.exec(command, {cwd: config.context}, (error, stdout, stderr) => {
    if(error){
      return reject('error');
    }
    return resolve(stdout);
  });
});

export default exec;
