'use strict';
var Basket = require('../src/model/basket.js');

describe('Basket', function() {
    describe('.getKindCount()', function() {
        it('if customer input some harry-pattor book ,return kindCount', function() {
            var books = [1, 3, 5, 2, 1, 3, 4, 2];
            var basket = new Basket();

            basket.getKindCount(books);

            var result = basket.kindCount;

            expect(result).toEqual([2, 2, 2, 1, 1])
        })

        it('if customer input some harry-pattor book ,return kindCount', function() {
            var books = [3, 4, 3, 5];
            var basket = new Basket();

            basket.getKindCount(books);

            var result = basket.kindCount;

            expect(result).toEqual([2, 1, 1])
        })

        it('if customer input some harry-pattor book ,return kindCount', function() {
            var books = [3];
            var basket = new Basket();

            basket.getKindCount(books);

            var result = basket.kindCount;

            expect(result).toEqual([1])
        })
    })

    describe('.getBasicGroup()', function() {
        it('if kindCount is sure then return groups', function() {
            var books = [1, 1];
            var basket = new Basket();

            basket.getKindCount(books);
            basket.getBasicGroup();

            var result = basket.groups;

            expect(result).toEqual({1: [1], 2: [1]});
        })

        it('if kindCount is sure then return groups', function() {
            var books = [1, 1, 2, 2, 3, 3, 4, 5];
            var basket = new Basket();

            basket.getKindCount(books);
            basket.getBasicGroup();

            var result = basket.groups;

            expect(result).toEqual({
                1: [1, 1, 1, 1, 1],
                2: [1, 1, 1]
            });
        })
    })
})
