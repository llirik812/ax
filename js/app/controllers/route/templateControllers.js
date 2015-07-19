angular.module('routeApp').controller('locationController', ['$scope', '$location', function($scope, $location){
    "use strict";

    $scope.$location = $location;
}]);

angular.module('routeApp').controller('directiveController', ['$scope', function($scope){
    "use strict";

    $scope.message = "Static";
}]);

angular.module('routeApp').controller('routeParamsController', ['$scope', '$routeParams', function($scope, $routeParams){
    "use strict";

    $scope.nameParam = $routeParams.name;
    $scope.surnameParam = $routeParams.surname;
    $scope.ageParam = $routeParams.age;
}]);

angular.module('routeApp').controller('template3Controller', ['$scope', function($scope){
    "use strict";

    $scope.message = "Vault";
}]);