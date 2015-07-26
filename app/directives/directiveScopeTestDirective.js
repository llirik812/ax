angular.module('routeApp').directive('directiveScopeTest', function() {
    "use strict";

    return {
        restrict: 'E',
        /**
         * Протестировал влияние строки ниже на видимость скопа контроллера из шаблона.
         * Если он определен, то пространство имен контроллера перекрывается
         * эту строчку следует понимать как создание собственного пространства
         * (isolated scope) имен директивы
         */
        //scope: {},
        /**
         * как я понимаю если неопределено пространство имен директивы, то
         * в аргумент scope передается scope контроллера и шаблону виден этот scope,
         * если определено, то
         * в аргумент scope передается scope директивы и шаблону виден scope только директивы и не виден
         * scope контроллера. Scope контроллера и scope
         * директивы - разные объекты.
         * @param scope
         * @param element
         */
        link: function(scope, element) {
            scope.directiveVar2 = 'directive value 2 (overriden)';
            // пытаемся переопределить переменную, которая переносится в блок ng-transclude
            scope.transcludeVar = "directive value (overriden)"
        },
        transclude: true,
        templateUrl: '/pages/directives/directiveScopeTestTemplate.html'
    }
});