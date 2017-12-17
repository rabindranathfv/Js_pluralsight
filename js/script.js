// Code goes here

// confirm
// if select "OK" get true
// if select "cancel" get false

var friends = [];

do {
    var person = prompt("introduzca el nombre de su nuevo amigo");
    friends.push(person);
    var finish = confirm("agregamos un nuevo amigo?")
} while (finish);

function friend_list(friends) {
    console.log("List of my friends");

    for (let index = 0; index < friends.length; index++) {
        console.log (friends[index]+ "\n");
    }
}
   
friend_list(friends);