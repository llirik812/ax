angular.module('routeApp').controller('templateFunctionDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    // Эта переменная создана для того, чтобы передать её значение
    // в директиву через атрибут с использованием префикса ng-attr-
    $scope.variable = 'abcdefg';

}]);
