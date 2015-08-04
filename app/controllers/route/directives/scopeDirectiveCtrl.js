angular.module('routeApp').controller('scopeDirectiveCtrl', ['$scope', function($scope){
    "use strict";

    // Создадим в директиве scopeDirective изолированный scope (isolate scope)
    // Для этотго определим для них переменные
    $scope.me = {name : 'Kirill', surname : 'Osokin', whoAmI : function(){
        return 'Angular programmer !!';
    }};
    $scope.sister = {name : 'Irina', surname : 'Osokina', whoAmI : function(){
        return 'My SISTER !!';
    }};
}]);
