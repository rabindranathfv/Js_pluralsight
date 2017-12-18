// zombie game

function randomNumber(range) {
    return Math.round ( Math.random() * range );
}

function random_weapon(weapons,id_weapon) {
    return weapons[randomNumber(id_weapon)];
}

var lifePoints = randomNumber(5);

var beginScenarios = ["hospital","school","highway","house","apartarment"];
var listWeapons = ["gun","bow","bomb","knife","axe","nuclear bomb"];
var typeZombie = ["litle zombie","dog zombie","cat zombie","snake zombie"];

function zombieGame(player_name,lifePoints,zombie_death) {
    do {
        
    } while (condition);

    alert("You win the game");
    return true;
}

alert("The zombie game begins");
var player_name = prompt("Introduzca su nombre");
alert("Inicia con " + lifePoints + " puntos de vida" );
alert("Generando escenario de forma aleatoria");
alert("Su escenario para sobrevivir es " + beginScenarios[randomNumber(beginScenarios.length - 1)]);

alert("your mission is kill 5 zombies to win");