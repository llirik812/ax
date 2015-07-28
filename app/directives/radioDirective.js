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
                sjFormGroupRadioDisabled: '='
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

                labelRadio.bind('touchstart', function(event){
                    event.preventDefault();
                    event.currentTarget.click();
                    event.currentTarget.focus();
                });

                labelRadio.hover(
                    function (event) {
                        scope.$apply(function () {
                            scope.hovered = true;
                        });
                    }, function () {
                        scope.$apply(function () {
                            scope.hovered = false;
                        });
                    }
                );

            },

            templateUrl: '/pages/directives/form-group-radio.html'
        };
    });
