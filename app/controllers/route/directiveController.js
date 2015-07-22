angular.module('routeApp').controller('directiveController', ['$scope', '$routeParams', function($scope, $routeParams){
    "use strict";

    $scope.template = $routeParams.name;
    $scope.name = $routeParams.name;

    // Эта переменная создана для того, чтобы передать её значение
    // в директиву через атрибут с использованием префикса ng-attr-
    $scope.variable = 'abcdefg';
}]);
