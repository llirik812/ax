angular.module('routeApp').directive('scope', function(){
    "use strict";

    return {
        restrict: 'A',
        scope : {
            // Передаем из скопа контроллера объект сюда через аттрибут 'info'
            qwe : '=info',
            // знак 'равно' указываем когда у нас имя аттрибута такое же как имя проперти
            variable : '='
        },
        template: 'Имя: {{qwe.name}}, Фамилия: {{qwe.surname}}, ' +
                  'Кто: {{qwe.whoAmI()}}, variable : {{variable.name}}'
    }
});