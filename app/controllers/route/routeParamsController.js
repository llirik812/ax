angular.module('routeApp').controller('routeParamsController', ['$scope', '$routeParams', function($scope, $routeParams){
    "use strict";

    $scope.nameParam = $routeParams.name;
    $scope.surnameParam = $routeParams.surname;
    $scope.ageParam = $routeParams.age;
}]);