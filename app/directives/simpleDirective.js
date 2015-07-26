angular.module('routeApp').directive('simpleDirective', function(){
    "use strict";

    return {
        restrict: 'A',
        templateUrl: '/pages/directives/simpleDirectiveTemplate.html'
    }
});