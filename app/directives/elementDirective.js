angular.module('routeApp').directive('myRestricts', function(){
    "use strict";

    return {
        transclude: true,
        // M - пока не используем, не дошел до её использования еще
        restrict: 'AEC',
        template: 'restrict directive ...'
    }
});