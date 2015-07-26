angular.module('routeApp').directive('directiveScopeTest', function() {
    "use strict";

    return {
        restrict: 'E',
        /**
         * Протестировал влияние строки ниже на видимость скопа контроллера из шаблона.
         * Если он определен, то пространство имен контроллера перекрывается
         */
        /*scope: {},*/
        link: function(scope, element) {
            scope.directiveVar2 = 'directive value 2 (overriden)';
        },
        templateUrl: '/pages/directives/directiveScopeTestTemplate.html'
    }
});