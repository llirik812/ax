angular.module('testApp').directive('transcludeUsage', function() {
    "use strict";

    return {
        restrict: 'A',
        scope : {
            icon : '='
        },
        transclude: true,
        templateUrl : '/pages/directives/transcludeDirectiveTemplate.html',
        // scope - это пространство имен контроллера директивы
        link : function(scope, element) {
            scope.nameTr = "Kirill";
        }
    }
});