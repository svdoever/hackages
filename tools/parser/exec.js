/**
* CLI tools for Crelan Bank: execute child process
**/
import spawn from 'child_process';


const exec = (command) => {
 spawn.exec(command, (err, stdout, stderr)=>{
  if(err){
   console.log(err);
  }

  console.log(stdout)
 });
};

export default exec;
