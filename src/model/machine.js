'use strict'
var load = require('./fixtures.js');

function Machine(number) {
    this.number = number;
}

Machine.prototype.discountPrice = function(kind) {
    var loadPromotion = load.loadPromotions();
    var discountPrice;

    loadPromotion.forEach(function(val, i) {
        if(val.amount === kind.length) {
            discountPrice = val.price * kind.length;
        }
    })
    return discountPrice;
}

module.exports = Machine;
