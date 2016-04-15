import watch from './webpack.watch';
import run from './webpack.run';

const webpackRunner = (params) => params.options.watch ? watch() : run();

export default webpackRunner;
