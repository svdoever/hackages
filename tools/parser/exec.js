/**
* CLI tools: execute native commands using child process
**/
import { spawn } from 'child_process';
import config from '../config/configuration';

const execCMD = (command) => new Promise((resolve, reject) => {
  const options = {
    cwd: config.context,
    stdio: 'inherit',
    stdin: 'inherit',
  };

  const cmd = spawn('node', [command], options);

  cmd.stdout.on('data', (data) => {
    console.log(data);
    resolve(data);
  });

  cmd.stderr.on('data', (data) => {
    console.log(data);
    resolve(data);
  });

  cmd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    reject(code);
  });
});

export default execCMD;
