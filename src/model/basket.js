'use strict'
var _ = require('lodash');

function Basket() {
    this.kindCount = [];
    this.groups = {};
}

Basket.prototype.getKindCount = function(books) {
    var bookList = {};
    var that = this;

    _.forEach(books, function(val) {
        bookList[val] = bookList[val] || [];
        bookList[val] ++;
    });

    _.forEach(bookList, function(val) {
        that.kindCount.push(val);
    })
}

Basket.prototype.getBasicGroup = function() {
    var kindCount = _.clone(this.kindCount);
    var biggestNumber = _.filter(this.kindCount, function(num1, num2) {
        return num1 > num2;
    })
    var count = 1;
    var that = this;

    while (biggestNumber[0] > 0) {
        var tempGroup = [];

        for (var i = 0; i < kindCount.length; i++) {
            tempGroup.push(1);
        }
        that.groups[count] = tempGroup;
        count += 1;
        biggestNumber[0] --;
        _.remove(kindCount, function(val) {
            return val === 1;
        })
    }
}

module.exports = Basket;
