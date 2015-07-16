angular.module('routeApp', ['ngRoute']);

angular.module('routeApp').config(['$routeProvider', function($routeProvider){
    "use strict";

    $routeProvider.when('/', {
        templateUrl : '/templates/rootPage.html',
        controller : 'testAppCtrl'
    }).when('/first', {
       templateUrl : '/templates/template1.html',
       controller : 'template1Controller'
    }).when('/second', {
        templateUrl : '/templates/template2.html',
        controller : 'template2Controller'
    }).when('/third', {
        templateUrl : '/templates/template3.html',
        controller : 'template3Controller'
    });
}]);