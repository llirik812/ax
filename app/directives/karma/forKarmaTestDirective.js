angular.module('routeApp').directive('forKarmaTest', function() {
    'use strict';

    return {
        restrict: 'A',
        scope: {
            hello: '@hellos'
        },
        link: function(scope, element, attr) {
            console.log(1);
        },
        template: '{{hello}}'
    }
});