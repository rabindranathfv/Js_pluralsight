// do not use deprecated js code
'use strict';

// using for a class who was a group of methods for making a microservice, or using methos to manipulate the objet
/*
OBJECT LITERAL
Se utiliza una unica instancia de la class con el patron de modulo, y se opera a traves de sus servicios
var Name = function() {
    method1: function(){
        body
    }
    methodn: function(){
        body
    }

}
*/

/*
var module = function() {
    var privateVar = "data";

    return {
        m1(){

        },
        m2(){
            
        }
    }
}
*/

// better way to use

var module = function() {
    var privateVar = "data";
    var test = {};

    var get = function (data) {
        // contenido
    }

    var save = function (data) {
        // contenido
    }

    // return all methods with call function
    return {
        get: get,
        save:save
    }
}