describe("TestAppCtrl", function(){
    "use strict";

    beforeEach(module('testApp'));

    it('should create `sorting` array with 7 items in there', inject(function($controller){
        var scope = getScope($controller);

        expect(scope.sorting.length).toEqual(7);
    }));

    it('filter should be selected name by default', inject(function($controller){
        var scope = getScope($controller);
        expect(scope.input1.option).toEqual('name');
    }));

    function getScope($controller){
        var scope = {};
        // creating mock scope
        var ctrl = $controller('testAppCtrl', {$scope : scope});
        return scope;
    }
});