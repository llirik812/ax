angular.module('routeApp', ['ui.router', 'ngTouch']);

angular.module('routeApp').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    "use strict";

    // Configuring $locationProvider
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('main', {
        url : '/',
        templateUrl : '/pages/rootPage.html',
        controller : 'testAppCtrl'
    }).state('location', {
        url : '/location',
        templateUrl : '/pages/locationPage.html',
        controller : 'locationController'
    }).state('directives', {
        url : '/directives',
        templateUrl : '/pages/directivePage.html',
        controller : 'directiveController'
    })
        .state('directives.directive-scope-test', {
            url : '/directives/directiveScopeTest',
            templateUrl : '/pages/directives/views/directiveScopeTestView.html',
            controller : 'directiveController'
        }).state('directives.draggable', {
            url : '/directives/draggable',
            templateUrl : '/pages/directives/views/draggableView.html',
            controller : 'directiveController'
        }).state('directives.expression-binding', {
            url : '/directives/expressionBinding',
            templateUrl : '/pages/directives/views/expressionBindingView.html',
            controller : 'directiveController'
        }).state('directives.my-restricts', {
            url : '/directives/myRestricts',
            templateUrl : '/pages/directives/views/myRestrictsView.html',
            controller : 'directiveController'
        }).state('directives.radio-group', {
            url : '/directives/radioGroup',
            templateUrl : '/pages/directives/views/radioGroupView.html',
            controller : 'directiveController'
        }).state('directives.scope', {
            url : '/directives/scope',
            templateUrl : '/pages/directives/views/scopeView.html',
            controller : 'directiveController'
        }).state('directives.simple', {
            url : '/directives/simple',
            templateUrl : '/pages/directives/views/simpleView.html',
            controller : 'directiveController'
        }).state('directives.template-function', {
            url : '/directives/templateFunction',
            templateUrl : '/pages/directives/views/templateFunctionView.html',
            controller : 'directiveController'
        }).state('directives.transclude-usage', {
            url : '/directives/transcludeUsage',
            templateUrl : '/pages/directives/views/transcludeUsageView.html',
            controller : 'directiveController'
        }).state('directives.time', {
            url : '/directives/time',
            templateUrl : '/pages/directives/views/timeView.html',
            controller : 'directiveController'
        });
}]);