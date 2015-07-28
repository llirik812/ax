angular.module('routeApp').controller('directiveController', ['$scope', '$timeout', function($scope, $timeout){
    "use strict";

    $scope.template = '++++++++++++++ empty ++++++++++++++++';
    $scope.name = '++++++++++++++ empty ++++++++++++++++';

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

    // Данные переменные мы будем использовать для для директивы отображающей время
    $scope.timeString = 'Current time is ';
    $scope.format = 'M/d/yy h:mm:ss a';

    $scope.destroy = function(){
        $element.find()
    };

    ////////////////////////////////// checkbox //////////////////////

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

    ////////////////////////////////// transclude //////////////////////

    $scope.description = 'This popup window made by using the transclude option of directive.';

    ////////////////////////////////// directive scope //////////////////////

    // определяем переменную в пространстве имен контроллера
    $scope.directiveVar1 = 'controller value 1';
    $scope.directiveVar2 = 'controller value 2';
    $scope.transcludeVar = 'controller value';

    ////////////////////////////////// expressionBinding /////////////////////

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
