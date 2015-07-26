angular.module('routeApp').directive('expressionBinding', function() {
    "use strict";

    return {
        restrict: 'A',
        scope: {
            hide : '&hideFunction',
            isDialogMessageShown: '=isShown'
        },
        link: function(scope, element) {

        },
        transclude: true,
        templateUrl: '/pages/directives/expressionDirectiveBindingTemplate.html'
    }
});