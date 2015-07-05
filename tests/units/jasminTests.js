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

        // Тестирование функций на предмет выбрасывания исключения
        function returnValueNotThrow() {
            return 1 + 2;
        }
        function returnValueThrow() {
            return zxs + 2;
        }
        expect(returnValueNotThrow).not.toThrow();
        expect(returnValueThrow).toThrow();

        // Делаем проверку выброса исключений
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

    /** Создаем функции, которые будут запускаться перед каждым it() спеком(spec).
     * Для этого наклядно продемонстрируем изменение значания переменной varAB
    */
    var varAB = 0, count = 0;
    // перед
    beforeEach(function() {
       ++varAB;
    });
    // после
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

// Предположим, что есть один тест (suite), который нам временно ненужен, но код нужно оставить
// включенное состояние
describe("This is xdescribe example", function() {
    "use strict";
    it("", function(){
        alert("suite turned off");
    });
});
// тоже только выключенное
xdescribe("This is xdescribe example", function() {
    "use strict";
    // ну и для spec`а выключим, хотя это и не необходимо
    xit("", function() {
        alert("suite turned off");
    });
});

/** Ставим шпионов. Прерывают выполнение вызванной функции, при этом публикуя событие об её вызове.
 * Они могу существовать только внутри describe или it блоков, внутри которых они определены.
 * При вызоде из it() они уничтожаются. То есть каждый раз при запуске нового spec нужно создавать шпиона.
 * Существуют специальные machers, которые взаимодействуют со spies.
 * Например: toHaveBeenCalled, toHaveBeenCalledWith
 * */
describe("Testing spies ...", function() {
    "use strict";
    var foo, bar = null, anotherBar = null;

    var foo = {
        setBar: function(value) {
            // Сообщение не будет показаваться,
            // так как функция не будет вызвана, для её вызова нужно использовать .and.callThrough()
            alert("setBar called !!!")
            bar = value;
        },
        getBar : function() {
            return bar;
        },
        // на ней используем .and.callThrough()
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

    /** Функция returnValue, так же как и callThrough выполняет вызов ф-ции, но при этои еще
     * заменяет возвращаемое ею значение другим.
     */
    it("substitute function returning value by another value", function() {
        spyOn(foo,"getBar").and.returnValue(999);
        foo.setBar(12121);
        // Call with substitution
        var result = foo.getBar();
        alert(result);
    });

    /**
     * Ставим шпиона на функцию, но в момент её вызова вызываем не её а указанную функцию
     */
    it("using spy callFake function", function(){
        spyOn(foo,"getBar").and.callFake(function(){
            return "fake function called";
        });
        var result = foo.getBar();
        alert(result);
    });

    /**
     * Ставим шпиона на функцию, но вместо её вызова выбрасываем исключение
     */
    it("using spy callFake function", function(){
        spyOn(foo,"setAnotherBar").and.throwError("quux");
        expect(function() {
            foo.setAnotherBar(123);
        }).toThrowError("quux");
    });

});