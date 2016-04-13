'use strict';

const webpackConfig = require('./webpack.config');
const path = require('path');
const files = [];
const preprocessors = {};
webpackConfig.entry.forEach(entry => {
  if(entry.match(/\.css$/)){
    return;
  }
  let resolvedPath = path.resolve('src'+entry.slice(1));
  files.push(resolvedPath);
  if(!entry.match(/angular[-,a-z]*\.js$/)){
    preprocessors[resolvedPath] = ['webpack'];
  }
});
const testEntry = 'src/js/app/index.spec.js';
files.push(testEntry);
preprocessors[testEntry] = ['webpack'];
// console.log(files);
// console.log(preprocessors);
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: files,


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: preprocessors,


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: {
      module: webpackConfig.module
    },

    plugins: [
      require('karma-webpack'),
      'karma-jasmine',
      'karma-chrome-launcher'
    ]
  })
};