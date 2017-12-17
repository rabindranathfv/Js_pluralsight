// Code goes here

// genera un numero entre 1 y 5 generado de manera aleatoria y debe ser rendondiado
var randomNUmber = Math.round( Math.random() * 15 );
//var randomNUmber = 15;

if (randomNUmber % 3 === 0 && randomNUmber != 0 ) {
    if (randomNUmber % 5 === 0) {
        alert("fizzbuzz");
    } else {
        alert("fizz");
    }
} else if (randomNUmber % 5 === 0 && randomNUmber != 0 ) {
    alert("buzz");
} else {
    alert("the random number is  " + randomNUmber );
}