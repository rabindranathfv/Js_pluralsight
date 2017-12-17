// Code goes here

// genera un numero entre 1 y 5 generado de manera aleatoria y debe ser rendondiado
var friends = [];

do {
    var person = prompt("introduzca el nombre de su nuevo amigo");
    friends.push(person);
    var finish = confirm("agregamos un nuevo amigo?")
} while (finish);


console.log("List of my friends");

for (let index = 0; index < friends.length; index++) {
    console.log (friends[index]+ "\n");
}