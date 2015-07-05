// http://jasmine.github.io/2.0/introduction.html

describe("testing describe: ", function() {
    "use strict";

    var a = true;

    it("a to be true", function() {
        expect(a).not.toBe(false);
    });

    var b,
        c = null,
        d = 12,
        regexpMatch = 'kirill',
        e = {},
        truthy = "Kirill",
        arr = ["item1", "item2", "item2"],
        pi = 3.1415926,
        e = 2.78;

    it("expects ...", function() {
        expect(b).toBe(undefined);
        expect(c).toBe(null);

        expect(d).toEqual(12);
        expect(d).not.toEqual(11);

        expect(regexpMatch).toMatch(/^kir.*$/);

        expect(e.d).not.toBeDefined();
        expect(e.d).toBeUndefined();

        expect(truthy).not.toBeFalsy();
        expect(truthy).toBeTruthy();

        expect(arr).toContain("item2");

        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);

        // ������������ ������� �� ������� ������������ ����������
        function returnValueNotThrow() {
            return 1 + 2;
        }
        function returnValueThrow() {
            return zxs + 2;
        }
        expect(returnValueNotThrow).not.toThrow();
        expect(returnValueThrow).toThrow();

        // ������ �������� ������� ����������
        function returnError() {
            throw new TypeError("this type is insufficient");
            return true;
        }
        expect(returnError).toThrowError(TypeError);
        expect(returnError).toThrowError(TypeError, "this type is insufficient");
    });
});

describe("Trying more complex tests", function() {
    "use strict";

    /** ������� �������, ������� ����� ����������� ����� ������ it() ������(spec).
     * ��� ����� �������� ���������������� ��������� �������� ���������� varAB
    */
    var varAB = 0, count = 0;
    // �����
    beforeEach(function() {
       ++varAB;
    });
    // �����
    afterEach(function() {
        ++varAB;
    });
    while (count < 10) {
        it("show varAB", function () {
            alert("varAB: " + varAB);
        });
        ++count;
    }
});

// �����������, ��� ���� ���� ���� (suite), ������� ��� �������� �������, �� ��� ����� ��������
// ���������� ���������
describe("This is xdescribe example", function() {
    "use strict";
    it("", function(){
        alert("suite turned off");
    });
});
// ���� ������ �����������
xdescribe("This is xdescribe example", function() {
    "use strict";
    // �� � ��� spec`� ��������, ���� ��� � �� ����������
    xit("", function() {
        alert("suite turned off");
    });
});

/** ������ �������. ��������� ���������� ��������� �������, ��� ���� �������� ������� �� � ������.
 * ��� ���� ������������ ������ ������ describe ��� it ������, ������ ������� ��� ����������.
 * ��� ������ �� it() ��� ������������. �� ���� ������ ��� ��� ������� ������ spec ����� ��������� ������.
 * ���������� ����������� machers, ������� ��������������� �� spies.
 * ��������: toHaveBeenCalled, toHaveBeenCalledWith
 * */
describe("Testing spies ...", function() {
    "use strict";
    var foo, bar = null, anotherBar = null;

    var foo = {
        setBar: function(value) {
            // ��������� �� ����� ������������,
            // ��� ��� ������� �� ����� �������, ��� � ������ ����� ������������ .and.callThrough()
            alert("setBar called !!!")
            bar = value;
        },
        getBar : function() {
            return bar;
        },
        // �� ��� ���������� .and.callThrough()
        setAnotherBar : function(value) {
            alert("setAnotherBar called by using .and.callThrough() or something like this");
            anotherBar = value;
        },
        getAnotherBar : function() {
            return anotherBar;
        }
    };

    beforeEach(function() {
        spyOn(foo, 'setBar');
        foo.setBar(123);
    });

    it("tracks that the spy was called", function() {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
        foo.setBar(456, 'another param');
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
        expect(bar).toBeNull();
    });

    it("testing callThrough()", function() {
        spyOn(foo, "setAnotherBar").and.callThrough();
        foo.setAnotherBar(123);
        expect(foo.setAnotherBar).toHaveBeenCalledWith(123);
    });

    /** ������� returnValue, ��� �� ��� � callThrough ��������� ����� �-���, �� ��� ���� ���
     * �������� ������������ �� �������� ������.
     */
    it("substitute function returning value by another value", function() {
        spyOn(foo,"getBar").and.returnValue(999);
        foo.setBar(12121);
        // Call with substitution
        var result = foo.getBar();
        alert(result);
    });

    /**
     * ������ ������ �� �������, �� � ������ � ������ �������� �� � � ��������� �������
     */
    it("using spy callFake function", function(){
        spyOn(foo,"getBar").and.callFake(function(){
            return "fake function called";
        });
        var result = foo.getBar();
        alert(result);
    });

    /**
     * ������ ������ �� �������, �� ������ � ������ ����������� ����������
     */
    it("using spy callFake function", function(){
        spyOn(foo,"setAnotherBar").and.throwError("quux");
        expect(function() {
            foo.setAnotherBar(123);
        }).toThrowError("quux");
    });

});