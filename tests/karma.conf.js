module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'js/app/sinon.js',
      'node_modules/bower/bower_components/angular/angular.js',
      'node_modules/bower/bower_components/angular-route/angular-route.js',
      'node_modules/bower/bower_components/angular-mocks/angular-mocks.js',
      'js/app/modules/*.js',
      'js/app/controllers/*.js',
      'tests/units/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],
//    browsers : ['Chrome'],

    plugins : [
            'phantomjs',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'tests/out/unit.xml',
      suite: 'unit'
    },

    singleRun: true
//    singleRun: false
  });
};