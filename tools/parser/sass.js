/**
* Hackages CLI tools: Transpiling sass
**/
import cliparse from 'cliparse';
import exec from './exec';

const sassCMD = cliparse.command('sass', {
  description: 'Transpiling Sass files with node-sass',
},
exec.bind(null, 'sass --watch scss:css'));

export default sassCMD;
