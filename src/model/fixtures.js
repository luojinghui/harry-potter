'use strict'
var Promotion = require("./promotion.js");

function loadPromotions() {
    return [
        new Promotion(1, 1, 8),
        new Promotion(2, 0.95, 7.6),
        new Promotion(3, 0.9, 7.2),
        new Promotion(4, 0.8, 6.4),
        new Promotion(5, 0.75,6)
    ];
}

exports.loadPromotions = loadPromotions;
