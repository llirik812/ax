angular.module('routeApp', ['ui.router']);

angular.module('routeApp').constant('STATES', {
    ROOT : 'root',
    LOCATION : 'location',
    DIRECTIVES : 'directives',
    DIRECTIVES_SJ : 'directives-sj-tests',
    KARMA : 'karma'
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
    SCOPE : 'scope',
    MAX_LENGTH : 'maxLength',
    REQUIRE_TEST : 'require_test',
    NG_MODEL_CTRL : 'ng_model_ctrl',
    SSN_VALIDATION : 'ssn_validation',
    LEAVE_PAGE_MODAL : 'leave_page_modal'
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
        // Directives for angular experiments
        .state(DIRECTIVE_STATES.DIRECTIVE_SCOPE_TEST, {
            parent : STATES.DIRECTIVES,
            url : '/directives/directiveScopeTest',
            templateUrl : '/pages/directives/views/directiveScopeTestView.html',
            controller : 'directiveScopeTestDirectiveCtrl'
        }).state(DIRECTIVE_STATES.DRAGGABLE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/draggable',
            templateUrl : '/pages/directives/views/draggableView.html',
            controller : 'draggableDirectiveCtrl'
        }).state(DIRECTIVE_STATES.EXPRESSION_BINDING, {
            parent : STATES.DIRECTIVES,
            url : '/directives/expressionBinding',
            templateUrl : '/pages/directives/views/expressionBindingView.html',
            controller : 'expressionBindingDirectiveCtrl'
        }).state(DIRECTIVE_STATES.MY_RESTRICTS, {
            parent : STATES.DIRECTIVES,
            url : '/directives/myRestricts',
            templateUrl : '/pages/directives/views/myRestrictsView.html',
            controller : 'restrictsDirectiveCtrl'
        }).state(DIRECTIVE_STATES.SCOPE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/scope',
            templateUrl : '/pages/directives/views/scopeView.html',
            controller : 'scopeDirectiveCtrl'
        }).state(DIRECTIVE_STATES.SIMPLE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/simple',
            views : {
                '' : {
                    templateUrl : '/pages/directives/views/simpleView.html',
                    controller : 'simpleNamedViewDirectiveCtrl'
                },
                'viewA' : {
                    templateUrl : '/pages/directives/views/simple/viewA.html',
                    controller : 'simpleNamedViewDirectiveCtrl'
                },
                'viewB' : {
                    templateUrl : '/pages/directives/views/simple/viewB.html',
                    controller : 'simpleNamedViewDirectiveCtrl'
                }
            }
        }).state(DIRECTIVE_STATES.TEMPLATE_FUNCTION, {
            parent : STATES.DIRECTIVES,
            url : '/directives/templateFunction',
            templateUrl : '/pages/directives/views/templateFunctionView.html',
            controller : 'templateFunctionDirectiveCtrl'
        }).state(DIRECTIVE_STATES.TRANSCLUDE_USAGE, {
            parent : STATES.DIRECTIVES,
            url : '/directives/transcludeUsage',
            templateUrl : '/pages/directives/views/transcludeUsageView.html',
            controller : 'transcludeUsageDirectiveCtrl'
        }).state(DIRECTIVE_STATES.TIME, {
            parent : STATES.DIRECTIVES,
            url : '/directives/time',
            templateUrl : '/pages/directives/views/timeView.html'
        }).state(DIRECTIVE_STATES.REQUIRE_TEST, {
            parent : STATES.DIRECTIVES,
            url : '/directives/requireTest',
            templateUrl : '/pages/directives/views/requireTestView.html'
        }).state(DIRECTIVE_STATES.NG_MODEL_CTRL, {
            parent : STATES.DIRECTIVES,
            url : '/directives/ngModelCtrl',
            templateUrl : '/pages/directives/views/ngModelCtrlView.html'
        }).
    // Directive for SJ testing
    state(STATES.DIRECTIVES_SJ, {
        url : '/directives_sj',
        templateUrl : '/pages/directiveSJPage.html',
        controller : 'directiveSJCtrl'
    })
        .state(DIRECTIVE_STATES.LEAVE_PAGE_MODAL, {
            parent : STATES.DIRECTIVES_SJ,
            url : '/directives/leavePageModal',
            controller : 'leavePageModalDirectiveCtrl',
            templateUrl : '/pages/directives/views/leavePageModalView.html'
        }).state(DIRECTIVE_STATES.SSN_VALIDATION, {
            parent : STATES.DIRECTIVES_SJ,
            url : '/directives/ssnValidation',
            controller : 'ssnValidationDirectiveCtrl',
            templateUrl : '/pages/directives/views/ssnValidationView.html'
        }).state(DIRECTIVE_STATES.RADIO_GROUP, {
            parent : STATES.DIRECTIVES_SJ,
            url : '/directives/radioGroup',
            templateUrl : '/pages/directives/views/radioGroupView.html',
            controller : 'radioDirectiveCtrl'
        }).state(DIRECTIVE_STATES.MAX_LENGTH, {
            parent : STATES.DIRECTIVES_SJ,
            url : '/directives/inputMaxLength',
            templateUrl : '/pages/directives/views/maxLengthView.html',
            controller : 'maxLengthDirectiveCtrl'
        }).
        // Directive for SJ testing
        state(STATES.KARMA, {
            url : '/karma',
            templateUrl : '/pages/karmaPage.html',
            controller : 'karmaCtrl'
        });
}]);