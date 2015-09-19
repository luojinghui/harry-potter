'use strict';
var main = require('../src/main.js');

describe('test function then return a biggest discount',function() {
    describe("main()",function() {

        it('if bookList have 1 book,then output biggest discount is 8', function() {
            var bookList = [1]
            expect(main(bookList)).toBe(8);
        });

        it('if bookList have 3 book,then output biggest discount is 21.6', function() {
            var bookList = [1, 2, 3]
            expect(main(bookList)).toBe(21.6);
        });

        it('if bookList have 20 book,then output biggest discount is 128', function() {
            var bookList = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5];
            expect(main(bookList)).toBe(128);
        });

        it('if bookList have 8 book,then output biggest discount is 51.2', function() {
            var bookList = [1, 1, 2, 2, 3, 3, 4, 5];
            expect(main(bookList)).toBe(51.2);
        });
    });
})
