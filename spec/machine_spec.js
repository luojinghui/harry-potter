'use strict';
var Machine = require('../src/model/machine.js');

describe('use test machine funtion',function() {
    describe("machine()",function() {

        xit('give discount kind and calculate discoutn price', function() {
            var machine = new Machine();
            var kind = [1,2,3,4];

            expect(machine.discountPrice(kind)).toBe(25.6);
        });

        xit('give discount kind and calculate discoutn price', function() {
            var machine = new Machine();
            var kind = [1];

            expect(machine.discountPrice(kind)).toBe(8);
        });

        xit('give discount kind and calculate discoutn price', function() {
            var machine = new Machine();
            var kind = [1,2,3,4,5];

            expect(machine.discountPrice(kind)).toBe(30);
        });
    });
})
