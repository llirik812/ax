"use strict";

testApp.controller("testAppCtrl", ['$scope', '$injector', '$http', 'firstService1',  'firstService2', 'firstLogService', 'secondService1', 'secondService2',  'secondLogService',

function($scope, $injector, $http, firstService1, firstService2, firstLogService, secondService1, secondService2, secondLogService){
    $scope.showMessage = function(){
        alert("This is a message");
    };

    $scope.arr = [{'name' : 'kirill', 'surname' : 'osokin'},
                {'name' : 'vecheslav', 'surname' : 'galibin'},
                {'name' : 'dmitry', 'surname' : 'shuvalov'},
                {'name' : 'ivan', 'surname' : 'pirogov'}];

    $scope.value1 = 10;

    $scope.input1 = {
        filter : "",
        onChange : function(){
            ++this.changeCounter;
        },
        pattern : /^(\s|\w|\d)*$/,
        changeCounter : 0,
        /**
         * Хотел попробовать в зависимости от значения этой переменной фильтровать записи
         * или по имени или по фамилии, но пока не знаю как...
         */
        option : 'name'
    };

    /*-------- Для сортировки ------------*/

    $scope.sorting = [
        {key : 5, value : 'kirill'},
        {key : 3, value : 'dsfdfs'},
        {key : 1, value : 'cxbxcvb'},
        {key : 7, value : 'ewrwew'},
        {key : 4, value : 'xcvbc'},
        {key : 2, value : 'qwer3qw'},
        {key : 0, value : '5gte4th'}
    ];

    /* --------- Используем $http ---------- */

    $scope.data = null;

    $http({method : 'GET', url : 'json.php', responseType : 'json'}).success(function(data, status){
        console.log('json.php received !!!!');
        $scope.data = data;
    }).error(function(data, status, headers, config){
        console.log('error:'+ status);
    });

    /* -------- переменная для ng-bint-template ---------- */
    $scope.text1 = "variable for template";

    /* ------- Создаем и тестируем сервисы ---------------*/

    firstService1.log('Using service number 1');
    firstService2.log('Using service number 2');
    firstLogService('Using service number 3');

    var secondService1 = $injector.get('secondService1');
    secondService1('Using service number 1 (by injector)');
    secondService1('Using service number 1');
    secondService2('Using service number 2');
    secondLogService('Using service number 3');
}]);
