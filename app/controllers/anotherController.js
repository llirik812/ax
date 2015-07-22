angular.module('testApp').config(['$controllerProvider', function($controllerProvider){
    $controllerProvider.register('anotherController', function($scope){
        console.log('Another controller registered');
    });
}]);