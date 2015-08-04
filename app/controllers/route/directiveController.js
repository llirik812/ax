angular.module('routeApp').controller('directiveController', ['$scope', '$timeout', 'DIRECTIVE_STATES', function($scope, $timeout, DIRECTIVE_STATES){
    "use strict";

    $scope.DIRECTIVE_STATES = DIRECTIVE_STATES;
}]);
