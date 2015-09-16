'use strict';
var load = require('./model/fixtures.js');

function main(bookList) {
    var loadP = load.loadPromotions();
    console.log(loadP);
    // return loadP;
}
module.exports = main;
