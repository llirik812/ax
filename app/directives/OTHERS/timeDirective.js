angular.module('routeApp').directive('time', ['$interval', 'dateFilter', function($interval, dateFilter){
    "use strict";

    /**
     * @param scope - передаем scope из контроллера
     * @param element - передаем элемент, который содержит директиву
     * @param attr - передаем hash объект, содержащий стрибуты из элемента
     */
    function link(scope, element, attr) {
        var timeoutId;

        function printTime() {
            element.text(attr.local + scope.timeString + dateFilter(new Date(), scope.format));
        }

        // функция следит за переменной, но как работает пока не знаю
        /*scope.$watch(attr.local, function(newValue, oldValue) {
            console.log("newValue: " + newValue);
            console.log("oldValue: " + oldValue);
        });*/

        printTime();

        $interval(printTime, 1000);

        // Также непойму пока как инициировать данный event
        /*element.on('$destroy', function(){
            alert('element destroyed');
        });*/
    }

    return {
        restrict : 'A',
        link : link,
        templateUrl : '/pages/directives/templates/timeDirectiveTemplate.html',
        controller : ['$scope', function($scope){
            "use strict";

            // Данные переменные мы будем использовать для для директивы отображающей время
            $scope.timeString = 'Current time is ';
            $scope.format = 'M/d/yy h:mm:ss a';

            $scope.destroy = function(){
                $element.find()
            };
        }]
    }
}]);