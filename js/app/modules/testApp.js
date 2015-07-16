"use strict";
var testApp = angular.module('testApp', []);

testApp.config(['$provide',function($provide){

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

testApp.provider('secondService1', function(){
    this.$get = function(){
        return function(str){
            console.log(stringToWay2 + str);
        };
    }
});

/* ------------------------------------ */

testApp.factory('secondService2', function(){
    return function(str){
        console.log(stringToWay2 + str);
    };
});

/* ------------------------------------ */

testApp.value('secondLogService', function(str){
    console.log(stringToWay2 + str);
});

/* ---- Added greeting provider ---- */
testApp.provider('greeting', function() {
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

testApp.constant('greetingText', 'Howdy there, ');

/* ----- There are two phases while starting angular App: config, run ----- */
// setting additional code to this phases
testApp.config(function(greetingProvider, greetingText){
    console.log('Additional config section works');

    greetingProvider.setText(greetingText);

    /*
    the config function runs in the configuration phase when no services are available
    so this code below will does not work
    */
    //greetingProvider.$get("Irina !");
});
testApp.run(function(greeting){
    console.log('Additional run section works');
    greeting("Kirill !");
});