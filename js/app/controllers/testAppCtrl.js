"use strict";
testApp.controller("testAppCtrl", ['$scope', '$http', function($scope, $http){
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
         * ����� ����������� � ����������� �� �������� ���� ���������� ����������� ������
         * ��� �� ����� ��� �� �������, �� ���� �� ���� ���...
         */
        option : 'name'
    };

    /*-------- ��� ���������� ------------*/

    $scope.sorting = [
        {key : 5, value : 'kirill'},
        {key : 3, value : 'dsfdfs'},
        {key : 1, value : 'cxbxcvb'},
        {key : 7, value : 'ewrwew'},
        {key : 4, value : 'xcvbc'},
        {key : 2, value : 'qwer3qw'},
        {key : 0, value : '5gte4th'}
    ];

    /* --------- ���������� $http ---------- */

    $scope.data = null;

    $http({method : 'GET', url : 'json.php', responseType : 'json'}).success(function(data, status){
        alert('SUCCESS !!!!');
        $scope.data = data;
    }).error(function(data, status, headers, config){
        alert('error:'+ status);
    });

    /* -------- ���������� ��� ng-bint-template ---------- */
    $scope.text1 = "variable for template";
}]);
