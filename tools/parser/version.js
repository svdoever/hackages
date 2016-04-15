
/**
* CLI tools: Return the current version of the CLI
**/
import path from 'path';
import cliparse from 'cliparse';
import cli from '../../package.json';

const version = () =>{
  return cli.version;
};

export default version;
