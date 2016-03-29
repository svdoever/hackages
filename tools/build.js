import watch from './watch';
import bundle from './bundle';


const build = (params) => params.options.watch ? watch(): bundle();


export default build;
