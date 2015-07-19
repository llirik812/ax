"use strict";
angular.module('testApp', ['routeApp']);

angular.module('testApp').config(['$provide', function($provide){

    $provide.provider('firstService1', function(){
        this.$get = function(){
            var MyService1 = {};

            MyService1.log = function(str){
                console.log(str);
            };

            return MyService1;
        };
    });

    $provide.factory('firstService2', function(){
        var MyService2 = {};

        MyService2.log = function(str){
           console.log(str);
        };

        return MyService2;
    });

    $provide.value('firstLogService', function(str){
        console.log(str);
    });
}]);

var stringToWay2 = "Second way: ";

/* ------------------------------------ */

angular.module('testApp').provider('secondService1', function(){
    this.$get = function(){
        return function(str){
            console.log(stringToWay2 + str);
        };
    }
});

/* ------------------------------------ */

angular.module('testApp').factory('secondService2', function(){
    return function(str){
        console.log(stringToWay2 + str);
    };
});

/* ------------------------------------ */

angular.module('testApp').value('secondLogService', function(str){
    console.log(stringToWay2 + str);
});

/* ---- Added greeting provider ---- */
angular.module('testApp').provider('greeting', function() {
    var text = 'Hello, ';

    this.setText = function(value) {
        text = value;
    };

    this.$get = function() {
        return function(name) {
            console.log(text + name);
        };
    };
});

// constant - works in config and controller phase
angular.module('testApp').constant('greetingText', 'Howdy there, ');
angular.module('testApp').constant('greetingName', 'Kirill !');

/* ----- There are two phases while starting angular App: config, run ----- */
// setting additional code to this phases
angular.module('testApp').config(function(greetingProvider, greetingText){
    console.log('Additional config section works');

    greetingProvider.setText(greetingText);

    /*
    the config function runs in the configuration phase when no services are available
    so this code below will does not work
    */
    //greetingProvider.$get("Irina !");
});
angular.module('testApp').run(function(greeting, greetingName){
    console.log('Additional run section works');
    greeting(greetingName);
});