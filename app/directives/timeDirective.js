angular.module('routeApp').directive('time', function(){
    "use strict";
    return {
        restrict : 'A',
        /**
         * @param scope - передаем scope из контроллера
         * @param element - передаем элемент, который содержит директиву
         * @param attr - передаем hash объект, содержащий стрибуты из элемента
         */
        link : function(scope, element, attr) {
            alert(scope.timeString);
            alert(element.get(0).tagName);
            alert(attr.local);

        },
        templateUrl : '/pages/directives/timeDirectiveTemplate.html'
    }
});