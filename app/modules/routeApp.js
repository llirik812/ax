angular.module('routeApp', ['ui.router']);

angular.module('routeApp').constant('STATES', {
    ROOT : 'root',
    LOCATION : 'location',
    DIRECTIVES : 'directives'
}).constant('DIRECTIVE_STATES', {
    SIMPLE : 'simple',
    DIRECTIVE_SCOPE_TEST : 'directive-scope-test',
    DRAGGABLE : 'draggable',
    EXPRESSION_BINDING : 'expressionBinding',
    MY_RESTRICTS : 'myRestricts',
    RADIO_GROUP : 'radioGroup',
    TEMPLATE_FUNCTION : 'templateFunction',
    TRANSCLUDE_USAGE : 'transclude_usage',
    TIME : 'time',
    SCOPE : 'scope'
});

angular.module('routeApp').config(['$stateProvider', '$urlRouterProvider', 'STATES', 'DIRECTIVE_STATES', function($stateProvider, $urlRouterProvider, STATES, DIRECTIVE_STATES){
    "use strict";

    // Configuring $locationProvider
    $urlRouterProvider.otherwise("/");

    $stateProvider.state(STATES.ROOT, {
        url : '/',
        templateUrl : '/pages/rootPage.html',
        controller : 'testAppCtrl'
    }).state(STATES.LOCATION, {
        url : '/location',
        templateUrl : '/pages/locationPage.html',
        controller : 'locationController'
    }).state(STATES.DIRECTIVES, {
        url : '/directives',
        templateUrl : '/pages/directivePage.html',
        controller : 'directiveController'
    })
        .state(DIRECTIVE_STATES.DIRECTIVE_SCOPE_TEST, {
            parent : STATES.DIRECTIVES,
            url : '/directives/directiveScopeTest',
            templateUrl : '/pages/directives/views/directiveScopeTestView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.DRAGGABLE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/draggable',
            templateUrl : '/pages/directives/views/draggableView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.EXPRESSION_BINDING, {
            parent : STATES.DIRECTIVES,
            url : '/directives/expressionBinding',
            templateUrl : '/pages/directives/views/expressionBindingView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.MY_RESTRICTS, {
            parent : STATES.DIRECTIVES,
            url : '/directives/myRestricts',
            templateUrl : '/pages/directives/views/myRestrictsView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.RADIO_GROUP, {
            parent : STATES.DIRECTIVES,
            url : '/directives/radioGroup',
            templateUrl : '/pages/directives/views/radioGroupView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.SCOPE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/scope',
            templateUrl : '/pages/directives/views/scopeView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.SIMPLE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/simple',
            views : {
                '' : {
                    templateUrl : '/pages/directives/views/simpleView.html',
                    controller : 'directiveController'
                },
                'viewA' : {
                    templateUrl : '/pages/directives/views/simple/viewA.html',
                    controller : 'directiveController'
                },
                'viewB' : {
                    templateUrl : '/pages/directives/views/simple/viewB.html',
                    controller : 'directiveController'
                }
            }
        }).state(DIRECTIVE_STATES.TEMPLATE_FUNCTION, {
            parent : STATES.DIRECTIVES,
            url : '/directives/templateFunction',
            templateUrl : '/pages/directives/views/templateFunctionView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.TRANSCLUDE_USAGE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/transcludeUsage',
            templateUrl : '/pages/directives/views/transcludeUsageView.html',
            controller : 'directiveController'
        }).state(DIRECTIVE_STATES.TIME, {
            parent : STATES.DIRECTIVES,
            url : '/directives/time',
            templateUrl : '/pages/directives/views/timeView.html',
            controller : 'directiveController'
        });
}]);