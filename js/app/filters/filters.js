angular.module('testAppFilters', []);

// $sce - Contextual escaping - https://docs.angularjs.org/api/ng/service/$sce
angular.module('testAppFilters', []).filter('colorFilter', function($sce){
    "use strict";

    function leftPad(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }
    return function(input) {
        var markUp = $sce.trustAsHtml('<span style="color: #' + leftPad((Math.floor(Math.random() * 16777215)).toString(16), 6) + ' !important">' + input + '</span>');
        return markUp;
    }

});