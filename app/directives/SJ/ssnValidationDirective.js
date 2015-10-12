angular.module('routeApp')
    .directive('sjSsnValidation', ['$timeout', function ($timeout) {
        'use strict';

        return {
            restrict: 'A',
            require: 'ngModel',

            link: function (scope, element, attrs, ctrl) {
                var SSN_PATTERN = /^[0-9]{10}$/;

                ctrl.ssn = attrs.sjSsnValidation || 1;

                $timeout(function() {
                    if(ctrl.$viewValue) {
                        setValidity();
                    }
                });

                ctrl.$parsers.unshift(function() {
                    return setValidity();
                });

                var setValidity = function () {
                    if (checkPattern()) {
                        ctrl.$setValidity('ssn', true);
                        return ctrl.$viewValue;
                    }
                    ctrl.$setValidity('ssn', false);
                    return ctrl.$viewValue;
                };

                function checkPattern() {
                    if (!SSN_PATTERN.test(ctrl.$viewValue)) return false;

                    var month = parseInt(ctrl.$viewValue.substr(2, 2)),
                        day = parseInt(ctrl.$viewValue.substr(4, 2));

                    if (month > 12 || month === 0 ||
                        day > 31 || day === 0) return false;

                    return true;
                }
            }
        };
    }]);
