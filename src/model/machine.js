'use strict'
var load = require('./model/fixtures.js');

function Machine(kind, number) {
    this.kind = kind;
    this.number = number;
}

Machine.prototype.discountPrice = function() {
    var loadPromotion = load.loadPromotions();
}

module.exports = Machine;
