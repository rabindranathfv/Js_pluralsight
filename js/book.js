'use strict';

var Book = function (name,price){
    // sino se retorna nada, la funcion por si misma retornara undefined
    var priceChaging = [],
        PriceChanged = [];

    this.name = function (val) {
        return name;
    };

    this.price = function (val) {
        return price;
    };

    this.onPriceChanging = function (callback) {
        callback(price);
        return this;
    };
    
    this.onPriceChanged = function (callback) {
        callback(price);
        return this;
    };
}

var books = new Book('js methods as a functions', 24200);

console.log('the name of the book is ' + books.name());
console.log('the price of the book is $' + books.price());

books.onPriceChanging(function (b,price) {
    if (price > 100) {
        console.log('error');
        return false;
    }
    return true;

});

books.onPriceChanged(function (b) {
   console.log('thi price has changed ' + b.price()); 
});


books.price(20);

books.price(200);