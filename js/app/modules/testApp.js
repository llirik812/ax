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