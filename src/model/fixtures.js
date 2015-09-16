'use strict'
var Promotion = require("./promotion.js");

function loadPromotions() {
    return [
        new Promotion(1, 1),
        new Promotion(2, 0.95),
        new Promotion(3, 0.9),
        new Promotion(4, 0.8),
        new Promotion(5, 0.75)
    ];
}

exports.loadPromotions = loadPromotions;
