angular.module('routeApp').directive('requireTest', function(){
    "use strict";

    return {
        restrict: 'E',
        transclude : true,
        controller : ['$scope', function($scope) {
            $scope.CONTROLLER_VARIABLE = 'INSIDE PARENT CONTROLLER';
            $scope.CONTROLLER_VAR_INSIDE_DIRECTIVE = 'CONTROLLER VAR INSIDE DIRECTIVE TAG';
            $scope.CONTROLLER_VAR_FOR_CHILD = 'CONTROLLER VAR FROM PARENT';

            this.getVariable = function() {
                return $scope.CONTROLLER_VAR_FOR_CHILD ;
            };
        }],
        templateUrl: '/pages/directives/templates/requireTestTemplate.html'
    };
}).directive('doRequireTest', function() {
    "use strict";

    return {
        // запрашиваем контроллер директивы, являющейся родительской
        // (по расположению в DOM), я понимаю это нужно тольео для инжекта в link??
        require : '^requireTest',
        restrict : 'E',
        link : function(scope, element, attr, requireTestCtrl) {
            scope.CONTROLLER_VARIABLE_FROM_PARENT = requireTestCtrl.getVariable();
        },
        templateUrl: '/pages/directives/templates/doRequireTestTemplate.html'
    };
});