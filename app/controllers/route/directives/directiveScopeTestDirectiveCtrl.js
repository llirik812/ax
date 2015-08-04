angular.module('routeApp').controller('directiveScopeTestDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    // определяем переменную в пространстве имен контроллера
    $scope.directiveVar1 = 'controller value 1';
    $scope.directiveVar2 = 'controller value 2';
    $scope.transcludeVar = 'controller value';
}]);
