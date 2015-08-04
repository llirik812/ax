angular.module('routeApp').controller('expressionBindingDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    $scope.closeMessage = 'sdsds';
    $scope.hideDialog = function(message) {
        $scope.closeMessage = message;
        $scope.isDialogMessageShown = false;
        $timeout(function() {
            $scope.isDialogMessageShown = true;
        }, 1000);
    };

    $scope.isDialogMessageShown = true;
}]);
