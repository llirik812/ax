angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    "use strict";

     // Configuring $locationProvider
    $locationProvider.html5Mode(false).hashPrefix('');

    $routeProvider.when('/', {
        templateUrl : '/templates/rootPage.html',
        controller : 'testAppCtrl'
    }).when('/location', {
       templateUrl : '/templates/locationPage.html',
       controller : 'locationController'
    }).when('/directive', {
        templateUrl : '/templates/directivePage.html',
        controller : 'directiveController'
    }).when('/routeParams/:name/:surname/:age', {
        templateUrl : '/templates/routeParamsPage.html',
        controller : 'routeParamsController'
    }).when('/third', {
        templateUrl : '/templates/template3.html',
        controller : 'template3Controller'
    });
}]);