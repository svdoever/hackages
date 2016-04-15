// Karma configuration for ci
import path from 'path';
const context = path.resolve(process.cwd(), 'report');

const configuration = {
  coverageReporter: {
    type: 'lcovonly',
    dir: context,
    subdir: '.',
    file: 'lcov.dat',
  },
  reporters: ['progress', 'bamboo', 'coverage'],
  browsers: ['PhantomJS'],
  singleRun: false,
};

export default configuration;
