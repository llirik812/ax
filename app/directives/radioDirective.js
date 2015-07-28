/* global angular */

angular.module('routeApp')
    .directive('sjFormGroupRadio', function () {
        'use strict';

        return {
            restrict: 'A',

            transclude: true,
            replace: true,

            scope: {
                sjFormGroupRadioScope: '=',
                sjFormGroupRadioDisabled: '=',
            },

            link: function (scope, element) {
                var inputRadio = element.find('input[type=radio]');
                var labelRadio = element.find('label');

                inputRadio.bind('focus', function () {
                    scope.$apply(function () {
                        scope.focused = true;
                    });
                });

                inputRadio.bind('blur', function () {
                    scope.$apply(function () {
                        scope.focused = false;
                    });
                });

                var touched = false;

                // workaround for iPad devices
                labelRadio.bind('touchstart', function(){
                    touched = true;
                });

                labelRadio.hover(
                    function (event) {
                        scope.$apply(function () {
                            scope.hovered = true;
                            if (touched) {
                                event.target.click();
                                touched = false;
                            }
                        });
                    }, function () {
                        scope.$apply(function () {
                            scope.hovered = false;
                        });
                    }
                );

            },

            templateUrl: '/pages/directives/templates/form-group-radio.html'
        };
    });
