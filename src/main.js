'use strict';
var load = require('./model/fixtures.js');
var Basket = require('./model/basket.js');
var Machine = require('./model/machine.js');

function main(bookList) {
    var basket = new Basket();
    var machine = new Machine();

    basket.getKindCount(bookList);
    basket.getBasicGroup();
    basket.getBestGroup();
    return machine.discountPrice(basket.groups);
}
module.exports = main;
