// http://jasmine.github.io/2.0/introduction.html

describe("testing describe: ", function(){
    "use strict";

    var a = true;

    it("a to be true", function(){
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

    it("expects ...", function(){
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

        // Тестирование функций на предмет выбрасывания исключения
        function returnValueNotThrow(){
            return 1 + 2;
        }
        function returnValueThrow(){
            return zxs + 2;
        }
        expect(returnValueNotThrow).not.toThrow();
        expect(returnValueThrow).toThrow();

        // Делаем проверку выброса исключений
        function returnError(){
            throw new TypeError("this type is insufficient");
            return true;
        }
        expect(returnError).toThrowError(TypeError);
        expect(returnError).toThrowError(TypeError, "this type is insufficient");
    });
});

describe("Trying more complex tests", function(){
    "use strict";
});