angular.module('routeApp').directive('expressionBinding', function() {
    "use strict";

    return {
        restrict: 'A',
        scope: {
            hide : '&hideFunction',
            isDialogMessageShown: '=isShown',
            closeMessage: '=closeMessage'
        },
        link: function(scope, element) {

        },
        transclude: true,
        templateUrl: '/pages/directives/templates/expressionDirectiveBindingTemplate.html'
    }
});