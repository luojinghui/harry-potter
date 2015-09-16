'use strict';
var main = require('../src/main.js');

describe('test function then return a biggest discount',function() {
    describe("main()",function() {

        it('if list have 0 book,then output biggest discount is 0', function() {
            var list = {}
            expect(main(list)).toBe(4);
        });

        it('if list have 6 book,then output biggest discount is 38', function() {
            var list = {
                1 : 2,
                2 : 1,
                3 : 1,
                4 : 1,
                5 : 1
            }
            expect(main(list)).toBe(4);
        });
    });
})
