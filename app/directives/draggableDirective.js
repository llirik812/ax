angular.module('routeApp').directive('draggable', function($document) {
    return {
        link: function(scope, element, attr) {
            var startX = 0, startY = 0, x = 0, y = 0;

            element.css({
                position: 'absolute',
                display: 'block',
                width: '300px',
                height: '150px',
                background: 'green',
                padding: '10px',
                'text-align': 'center',
                cursor: 'pointer',
                color: 'white',
                'font-weight': 'bold',
                'box-shadow': '2px 2px 5px 0 rgba(1, 1, 1, 0.5)',
                'box-sizing': 'border-box'
            });

            element.on('mousedown', function (event) {
                // Prevent default dragging of selected content
                event.preventDefault();
                startX = event.pageX - x;
                startY = event.pageY - y;
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });

            function mousemove(event) {
                x = event.pageX - startX;
                y = event.pageY - startY;
                $('#pozX').html(x);
                $('#pozY').html(y);
                $('#pageX').html(event.pageX);
                $('#pageY').html(event.pageY);
                $('#startX').html(startX);
                $('#startY').html(startY);
                element.css({
                    top: y + 'px',
                    left: x + 'px'
                });
            }

            function mouseup() {
                $document.off('mousemove', mousemove);
                $document.off('mouseup', mouseup);
            }
        },
        restrict: 'A',
        scope: {},
        transclude: true,
        templateUrl: '/pages/directives/templates/draggableDirectiveTemplate.html'
    };
});




















