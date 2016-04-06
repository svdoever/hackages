// Karma configuration for ci
const path = require('path');

const configuration = {
  coverageReporter : {
    type : 'lcovonly',
    dir : path.resolve(process.cwd(), 'report'),
    subdir: '.',
    file: 'lcov.dat'
  },
  reporters: ['progress', 'bamboo', 'coverage'],
  browsers: ['PhantomJS'],
  singleRun: true
};

export default configuration;
