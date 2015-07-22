angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    "use strict";

     // Configuring $locationProvider
    $locationProvider.html5Mode(false).hashPrefix('');

    $routeProvider.when('/', {
        templateUrl : '/pages/rootPage.html',
        controller : 'testAppCtrl'
    }).when('/location', {
       templateUrl : '/pages/locationPage.html',
       controller : 'locationController'
    }).when('/directive/:name', {
        templateUrl : '/pages/directivePage.html',
        controller : 'directiveController'
    }).when('/routeParams/:name/:surname/:age', {
        templateUrl : '/pages/routeParamsPage.html',
        controller : 'routeParamsController'
    });
}]);