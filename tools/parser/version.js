
/**
* CLI tools: Transpiling sass
**/
import path from 'path';
import cliparse from 'cliparse';
import cli from '../../package.json';

const version = () =>{
  return cli.version;
};

export default version;
