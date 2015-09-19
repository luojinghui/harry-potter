'use strict';
var main = require('../src/main.js');

describe('test function then return a biggest discount',function() {
    describe("main()",function() {

        xit('if list have 0 book,then output biggest discount is 0', function() {
            var list = []
            expect(main(bookList)).toBe(0);
        });

        xit('if bookList have 1 book,then output biggest discount is 8', function() {
            var bookList = [1]
            expect(main(bookList)).toBe(8);
        });

        xit('if bookList have 6 book,then output biggest discount is 38', function() {
            var bookList = [1, 1, 2, 2, 3, 3, 4, 5];
            expect(main(bookList)).toBe(51.2);
        });
    });
})
