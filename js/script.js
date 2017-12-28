// do not use deprecated js code
'use strict';

// function to easy to read and browser
function display() {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'object') 
        displayObject(arguments[i])
      else
        displayValue(arguments[i], true)
    }
  }
  
  function displayObject(object) {
    if (object == null)
      displayValue('null')
    displayValue(getTypeName(object) + ' {')
    for(var propertyName in object) {
      if (propertyName != 'constructor') {
        displayValue(propertyName + ': ' + object[propertyName], false, true);
      }
    }
    displayValue('}', true)
  }
  
  function displayValue(value, addMargin, addPadding) {
    var div = document.createElement('div');
    div.style.fontSize='32px'
    if (addMargin)
      div.style.marginBottom='30px'
    if (addPadding)
      div.style.paddingLeft='30px'
    div.textContent = value;
    document.body.appendChild(div)
  }
  
  function getTypeName(object) {
     var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec(object.constructor.toString());
     return (results && results.length > 1) ? results[1] : "";
  }

  /*

        New Code

  */

  // Js class with literals

var rabin1 = { name: "Rabindranath",lastname: "Ferreira", age: 27}

rabin1.country = "Chile";
//display(rabin1)

//var rabin = new Person();


// function of and Object with params

function Person2(name,lastname,age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}

/*

var rabin2 = new Person2("Rabindranath","ferreira",27)

display(rabin2)
*/


// Using create object and prototype

var rabin3 = Object.create(Object.prototype,
  {
    name : {
      value : 'Rabin',
      enumerable : true,
      writable : true,
      configurable : true
    },
    color : {
      value : 'blanco',
      enumerable : true,
      writable : true,
      configurable : true
    } 
  })

//display(rabin3)


// class with constructor method, ES6 Class

class Person4 {
  constructor(name,age, country){
    this.name = name;
    this.age = age;
    this.country = country;
  }

    //method
  Say_hello()  {
    display('HOLA HOLA HOLA');
    // using atributte
    alert(this.name);
  }
}
/*
var rabin4 = new Person4('Rabindranath', 27, 'Chile');

display(rabin4);
rabin4.Say_hello();

*/

// Inhererit - Herencia

class Animal {
  constructor(voice){
    this.voice = voice || 'Grunt'
  }

  speak(){
    display(this.voice)
  }
}

// Cat is the Song of Animal, and he inherit all methods from animal
class Cat extends Animal{
  constructor(name,color){
    super('Meow')
    this.name = name
    this.color = color
  }
}

var litleCat = new Cat('TW','Green');
// using a method of the father
litleCat.speak();