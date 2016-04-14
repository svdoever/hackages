/**
* CLI tools for Crelan Bank: execute child process
**/
import spawn from 'child_process';

const exec = (command) => new Promise((resolve, reject)=>{
  spawn.exec(command, (error, stdout, stderr) => {
    if(error){
      return reject('error');
    }
    return resolve(stdout);
  });
});

export default exec;
