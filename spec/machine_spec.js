'use strict';
var Machine = require('../src/model/machine.js');

describe('use test machine funtion',function() {
    describe("machine()",function() {

        it('give discount bestGroups and calculate discoutn price', function() {
            var machine = new Machine();
            var bestGroups = {1: [1]};
            var result = machine.discountPrice(bestGroups);

            expect(result).toBe(8);
        });

        it('give discount bestGroups and calculate discoutn price', function() {
            var machine = new Machine();
            var bestGroups = {
                1: [1, 1, 1, 1],
                2: [1, 1, 1, 1]
            };
            var result = machine.discountPrice(bestGroups);

            expect(result).toBe(51.2);
        });

        it('give discount bestGroups and calculate discoutn price', function() {
            var machine = new Machine();
            var bestGroups = {
                1: [1, 1, 1, 1, 1],
                2: [1, 1, 1, 1]
            };
            var result = machine.discountPrice(bestGroups);

            expect(result).toBe(55.6);
        });

        it('give discount bestGroups and calculate discoutn price', function() {
            var machine = new Machine();
            var bestGroups = {
                1: [1, 1, 1, 1],
                2: [1, 1, 1, 1],
                3: [1, 1, 1, 1],
                4: [1, 1, 1, 1],
                5: [1, 1, 1, 1]
            };
            var result = machine.discountPrice(bestGroups);

            expect(result).toBe(128);
        });
    });
})
