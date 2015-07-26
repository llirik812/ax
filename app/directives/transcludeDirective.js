angular.module('testApp').directive('transcludeUsage', function() {
    "use strict";

    return {
        restrict: 'A',
        scope : {
            icon : '='
        },
        transclude: true,
        templateUrl : '/pages/directives/transcludeDirectiveTemplate.html'
    }
});