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

/* Running intrinsic suite */
describe("testing mock http", function(){
    var scope = {}, ctrl, $httpBackend;

    beforeEach(module('testApp'));

    beforeEach(inject(function($controller, _$httpBackend_, $rootScope){
        scope = {};
        $httpBackend = _$httpBackend_;

        // ������� mock
        $httpBackend.expectGET('json.php').respond([
            {"key" : "5", "value" : "kirill"},
            {"key" : "3", "value" : "dsfdfs"}
        ]);

        scope = $rootScope.$new();
        // ��� mock ������������
        ctrl = $controller('testAppCtrl', {$scope : scope});
    }));

    it('should be called', function(){
        // �������� ������� success � testAppCtrl
        alert("Calling $httpBackend.flush()");
        $httpBackend.flush();
        alert(scope.data);
    });
});
