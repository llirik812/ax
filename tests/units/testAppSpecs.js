describe("TestAppCtrl", function(){
    "use strict";

    var scope = {}, ctrl;

    beforeEach(module('testApp'));

    beforeEach(inject(function($controller){
        scope = {};
        ctrl = $controller('testAppCtrl', {$scope : scope});
    }));

    it('should create `sorting` array with 7 items in there', inject(function($controller){
        expect(scope.sorting.length).toEqual(7);
    }));

    it('filter should be selected name by default', inject(function($controller){
        expect(scope.input1.option).toEqual('name');
    }));
});