describe("TestAppCtrl", function(){
    "use strict";

    var scope = {}, ctrl;

    beforeEach(module('testApp'));

    it('should create `sorting` array with 7 items in there', inject(function($controller){
        // creating mock scope
        ctrl = $controller('testAppCtrl', {$scope : scope});

        expect(scope.sorting.length).toEqual(7);
    }));
});