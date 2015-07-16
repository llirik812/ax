angular.module('routeApp').controller('template1Controller', ['$scope', function($scope){
    "use strict";

   $scope.message = "Cool";
}]);

angular.module('routeApp').controller('template2Controller', ['$scope', function($scope){
    "use strict";

    $scope.message = "Static";
}]);

angular.module('routeApp').controller('template3Controller', ['$scope', function($scope){
    "use strict";

    $scope.message = "Vault";
}]);