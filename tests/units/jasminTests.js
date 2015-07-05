// http://jasmine.github.io/2.0/introduction.html

describe("testing describe: ", function(){
    "use strict";

    var a = true;

    it("a to be true", function(){
        expect(a).not.toBe(false);
    });

    var b, c = null;

    it("to be null", function(){
        expect(b).toBe(undefined);
        expect(c).toBe(null);
    });
});