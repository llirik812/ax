angular.module('routeApp')
    .directive('leavePageModal', ['$window', /*'featureDetectorService', */function ($window/*, featureDetectorService*/) {
        'use strict';
        return {
            restrict: 'A',
            scope: {
                sjBeforeUnloadMessage: '@',
                sjBeforeUnloadStopRouting: '&',
                sjBeforeUnloadIf: '='
            },
            link: function (scope, element) {
                if (_.isUndefined(scope.sjBeforeUnloadIf)) {
                    scope.sjBeforeUnloadIf = false;
                }

                var href;

                /* SCOPE VARIABLES & FUNCTIONS */

                scope.showLeavePageModal = false;

                scope.leavePage = function() {
                    alert(href);
                };

                scope.stayPage = function() {
                    alert('exit');
                };

                /* HELPER FUNCTIONS */

                function areYouSurePrompt() {
                    if (scope.sjBeforeUnloadIf) {
                        return scope.sjBeforeUnloadMessage;
                    }
                }

                /* EVENT HANDLERS */

                /*if (featureDetectorService.isIosDevice()) {*/
                    $('a:not([href^="#"])').bind('click', function(event) {
                        event.preventDefault();
                        if (scope.sjBeforeUnloadIf) {
                            href = event.currentTarget.href;
                            scope.showLeavePageModal = true;
                            scope.$apply();
                        }
                    });
                /*}*/

                $(window).bind('beforeunload', areYouSurePrompt);

                element.bind('$destroy', function () {
                    $(window).unbind('beforeunload', areYouSurePrompt);
                });

            },
            templateUrl : '/pages/directives/templates/leavePageModalDirectiveTemplate.html'
        };
    }]);
