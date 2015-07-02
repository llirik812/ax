testApp.controller("testAppCtrl", ['$scope', function($scope){
    $scope.showMessage = function(){
        alert("This is a message");
    }
    $scope.arr = [{'name':'kir1','surname':'oso1'},
            {'name':'kir2','surname':'oso2'},
            {'name':'kir3','surname':'oso3'},
            {'name':'kir4','surname':'oso4'}];

    $scope.value1 = 10;


}]);