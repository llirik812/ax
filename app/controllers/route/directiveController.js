angular.module('routeApp').controller('directiveController', ['$scope', '$routeParams', function($scope, $routeParams){
    "use strict";

    $scope.template = $routeParams.name;
    $scope.name = $routeParams.name;

    // Эта переменная создана для того, чтобы передать её значение
    // в директиву через атрибут с использованием префикса ng-attr-
    $scope.variable = 'abcdefg';

    // Этот контроллер используется для отображения вкладки с директивами
    // Создадим в директиве scopeDirective изолированный scope (isolate scope)
    // Для этотго определим для них переменные
    $scope.me = {name : 'Kirill', surname : 'Osokin', whoAmI : function(){
            return 'Angular programmer !!';
    }};
    $scope.sister = {name : 'Irina', surname : 'Osokina', whoAmI : function(){
        return 'My SISTER !!';
    }};

}]);
