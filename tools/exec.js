const exec = (fn, options) => {
  const task = fn.default || fn;

  return task(options).then(() => {
    console.log(`${task.name} is done`);
  });
};

const init = () => {}
const args = process.argv[2];

if (args) {
  const module = require(`./${args}`);
  exec(module);
} else {
  throw new Error('Please provide a command to be executed...');
}

export default exec;
