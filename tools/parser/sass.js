/**
* Hackages CLI tools: Transpiling sass
**/
import cliparse from 'cliparse';
import sass from '../sassRunner';

const sassCMD = cliparse.command('sass', {
  description: 'Transpiling Sass files with node-sass'
},
sass);

export default sassCMD;
