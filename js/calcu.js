'use strict';

var calc = function (start) {
    // sino se retorna nada, la funcion por si misma retornara undefined
    this.add = function (x) {
        start = start + x;
        return this;
    };

    this.multiply = function (y) {
        start = start * y;
        return this;
    };

    this.equals = function (callback) {
        callback(start);
        return this;
    };
}

new calc(0);
    .add(1);
    .add(2);
    .multiply(3);
    .equals(function (result) {
        console.log(" "+ result);
    });