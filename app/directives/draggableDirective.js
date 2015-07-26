angular.module('routeApp').directive('draggable', function() {
    "use strict";

    function link(scope, element) {
        element.css({
            position: 'fixed',
            display: 'block',
            width: '300px',
            height: '100px',
            background: 'green',
            padding: '10px',
            'text-align': 'center',
            cursor: 'pointer',
            color: 'white',
            'font-weight': 'bold',
            'box-shadow': '2px 2px 5px 0 rgba(1, 1, 1, 0.5)',
            'box-sizing': 'border-box'
        });

        element.on('mousedown', function(event){
            $(event.currentTarget).css({
                border: '1px solid red'
            });
        });

        element.on('mouseup', function(event){
            $(event.currentTarget).css({
                border: '0px'
            });
        });



    }

    return {
        restrict: 'A',
        scope: {},
        link: link,
        transclude: true,
        templateUrl: '/pages/directives/draggableDirectiveTemplate.html'
    }
});