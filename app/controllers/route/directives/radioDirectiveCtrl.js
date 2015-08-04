angular.module('routeApp').controller('radioDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    $scope.personalDetails = {
        data : {
            identity : {
                gender : 'MALE'
            }
        }
    };

    $scope.personalDetails.data.identity.gender = 'MALE';

    $scope.genderRadio = $scope.personalDetails.data.identity.gender === 'MALE';

    $scope.personalDetails.data.identity.ssn = false;

    $scope.logRadio = function(){
        $scope.genderRadio = $scope.personalDetails.data.identity.gender === 'MALE';
    };

    $scope.x = 0;

}]);
