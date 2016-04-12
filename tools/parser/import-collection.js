/**
* CLI tools for Crelan Bank
**/
import cliparse from 'cliparse';
import spawn from 'child_process';
import exec from './exec';

const importAll = () => {
  exec('bb import-collection');
};

const importAllCMD = cliparse.command('import-all', {
  description: 'Import backbase collection'
},
importAll);

export default importAllCMD;
