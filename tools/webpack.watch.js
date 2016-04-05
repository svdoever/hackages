import webpack from 'webpack';
import webpackConfig from './config/webpack.config';
/**
* Watch all the files
**/
const watch = () => new Promise((resolve, reject) => {
  const handler = (error, stats) => {
    if (error) {
      return reject(error);
    }
    console.log(stats.toString(webpackConfig.stats));
    return resolve();
  };
  webpack(webpackConfig).watch({}, handler);
});

export default watch;
