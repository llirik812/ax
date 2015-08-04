angular.module('routeApp').controller('timeDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    // Данные переменные мы будем использовать для для директивы отображающей время
    $scope.timeString = 'Current time is ';
    $scope.format = 'M/d/yy h:mm:ss a';

    $scope.destroy = function(){
        $element.find()
    };
}]);
