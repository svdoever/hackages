import webpack from 'webpack';
import webpackConfig from './config/webpack.config';

/**
* Create application bundles from the source file
**/

const bundle = () => new Promise((resolve, reject) => {
  const handler = (error, stats) => {
    if (error) {
      return reject(error);
    }
    console.log(stats.toString(webpackConfig.stats));
    return resolve();
  };

  webpack(webpackConfig).run(handler);
});

export default bundle;
