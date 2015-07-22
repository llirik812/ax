angular.module('routeApp').directive('time', ['$interval', 'dateFilter', function($interval, dateFilter){
    "use strict";

    /**
     * @param scope - передаем scope из контроллера
     * @param element - передаем элемент, который содержит директиву
     * @param attr - передаем hash объект, содержащий стрибуты из элемента
     */
    function link(scope, element, attr) {
        var format,
            timeoutId;

        element.text(attr.local + scope.timeString + dateFilter(new Date(), scope.format));
    }

    return {
        restrict : 'A',
        link : link,
        templateUrl : '/pages/directives/timeDirectiveTemplate.html'
    }
}]);