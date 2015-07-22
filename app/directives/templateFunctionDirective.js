angular.module('routeApp').directive('templateFunction', function(){
    "use strict";
    return {
        /*
        в elem передается элемент на который повешена директива,
        а в attr - объект, ассоциированный с этим элементом
        */
        template: function(elem, attr){
            return 'Tag name: ' + elem.get(0).localName + ', attr: ' + attr.myAttr;
        }
    }
});