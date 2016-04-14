module.exports = function (wallaby) {
  const babelCompiler = wallaby.compilers.babel({
    presets: ['es2015', 'stage-0']
  });

  return {
    setup: function(){
      require('babel-polyfill')
    },

    files: [
      'tools/**/*.js'
    ],

    tests: [
      'test/*.spec.js',
    ],

    env: {
      type: 'node'
    },

    testFramework: 'mocha',

    compilers: {
      'tools/**/**.js': babelCompiler,
      'test/*.spec.js': babelCompiler
    },
  };
};
