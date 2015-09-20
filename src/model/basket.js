'use strict'
var _ = require('lodash');

var Basket = (function() {

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

        _.forEach(kindCount, function(val) {
            tempGroup.push(1);
        })
        that.groups[count] = tempGroup;
        count += 1;
        biggestNumber[0] --;
        _.remove(kindCount, function(val) {
            return val === 1;
        })
        kindCount = _.map(kindCount, function(val) {
            return val - 1;
        })
    }
}

Basket.prototype.getBestGroup = function() {
    var groups = _.clone(this.groups);

    _.forEach(groups, function(valOne, keyOne) {
        _.forEach(groups, function(valTwo, keytwo) {
            if(valOne.length === 5 && valTwo.length === 3) {
                //groups[keyOne] = _.drop(valOne);
                valOne.length = 4;
                valTwo.push(1);
            }
        })
    })
    this.groups = groups;
};
    return Basket;
})();

module.exports = Basket;
