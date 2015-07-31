angular.module('routeApp').directive('sjMaxLength', function() {
    return {
        restrict : 'A',
        link : function(scope, element, attrs) {
            var oldValue = scope[attrs.ngModel];

            element.bind('keydown', function(event) {
                if ((scope[attrs.ngModel].length >= attrs.sjMaxLength) &&
                    (!_.contains([46, 8, 9, 27, 13], event.keyCode) &&
                        // Allow: Ctrl+A
                    !(event.keyCode == 65 && event.ctrlKey === true) &&
                        // Allow: Ctrl+C
                    !(event.keyCode == 67 && event.ctrlKey === true) &&
                        // Allow: Ctrl+X
                    !(event.keyCode == 88 && event.ctrlKey === true) &&
                        // Allow: home, end, left, right
                    !(event.keyCode >= 35 && event.keyCode <= 39) &&
                        // prevent selection behaviour blocking
                    !(event.target.selectionEnd != event.target.selectionStart))) {

                    event.preventDefault();
                }
            });

            // in order to prevent pasting humongous value to this input field
            scope.$watch(attrs.ngModel, function(newValue) {
                if (newValue.length > attrs.sjMaxLength) {
                    scope[attrs.ngModel] = scope[attrs.ngModel].substr(0, attrs.sjMaxLength);
                }
                oldValue = scope[attrs.ngModel];
            });
        }
    }
});