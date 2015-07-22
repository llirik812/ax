angular.module('routeApp').directive('myRestricts', function(){
    "use strict";

    return {
        // M - пока не используем, не дошел до её использования еще
        restrict: 'AEC',
        template: 'restrict directive ...'
    }
});