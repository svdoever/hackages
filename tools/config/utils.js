import fs from 'fs';
import path from 'path';
import pathExists from 'path-exists';
import { touch } from 'shelljs';
const cwd = process.cwd();

const getPath = (file) => {
  const content = fs.readFileSync(file, 'utf-8');
  return JSON.parse(content).main;
};

// this use index.js by default but you can change that by defining
// the entry point inside your package.json
export const entry = () => {
  const main = path.resolve(cwd, 'package.json'); // entry defined inside package.json
  const index = path.resolve(cwd, 'index.js');

  if (pathExists.sync(index)) {
    return index;
  }

  if (pathExists.sync(main)) {
    return `./${getPath(main)}`;
  }

  // Hey, we need an entry point!! Let's create one for you
  touch('index.js');
  return index;
};
