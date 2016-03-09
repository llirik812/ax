angular.module('routeApp').directive('modelControllerTest', [function() {
    return {
        restrict : 'E',
        link : function(scope, elem, attr) {
            scope.$watch(attr.ngModel, function() {
                console.log("model changed");
            });
        },
        controller : ['$scope', function($scope) {
            $scope.vari = "";

        }],
        templateUrl : '/pages/directives/templates/directiveNgCtrlTestTemplate.html'
    }
}]);