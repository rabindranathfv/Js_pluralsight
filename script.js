// Code goes here

// genera un numero entre 1 y 5 generado de manera aleatoria y debe ser rendondiado
var numRandom;

for (let index = 0; index < 10; index++) {
    numRandom = Math.round( Math.random() * 5 );
    console.log(numRandom);
    if (numRandom % 3 === 0 && numRandom != 0) {
        alert("fizz");
    } else if (numRandom % 5 === 0 ) {
        alert("buzz");
    } else {
        console.log("My number is " + numRandom);
    }
}