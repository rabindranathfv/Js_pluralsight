// Code goes here

// genera un numero entre 1 y 5 generado de manera aleatoria y debe ser rendondiado
var numRandom;

for (let numRandom = 1; numRandom <= 100; numRandom++) {
    console.log(numRandom);
    if (numRandom % 3 === 0 ) {
        console.log("fizz");
    } else if (numRandom % 5 === 0 ) {
        console.log("buzz");
    } else if (numRandom % 3 === 0 && numRandom % 5 === 0) {
        console.log("fizzbuzz");
    } else {
        console.log("My number is " + numRandom);
    }
}