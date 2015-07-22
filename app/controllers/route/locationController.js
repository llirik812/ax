angular.module('routeApp').controller('locationController', ['$scope', '$location', function($scope, $location){
    "use strict";

    $scope.$location = $location;
}]);
