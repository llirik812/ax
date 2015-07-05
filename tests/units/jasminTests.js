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
        e = {};

    it("expects ...", function(){
        expect(b).toBe(undefined);
        expect(c).toBe(null);
        expect(d).toEqual(12);
        expect(d).not.toEqual(11);
        expect(regexpMatch).toMatch(/^kir.*$/);
        expect(e.d).not.toBeDefined();
        expect(e.d).toBeUndefined();
    });
});