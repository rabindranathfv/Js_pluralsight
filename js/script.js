// zombie game
var lifePoints = randomNumber(5);
var beginScenarios = ["hospital","school","highway","house","apartarment"];
var listWeapons = ["gun","bow","bomb","knife","axe","nuclear bomb"];
var typeZombie = ["litle zombie","dog zombie","cat zombie","snake zombie"];


// FUNCTIONS IN GAME 

function randomNumber(range) {
    return Math.round ( Math.random() * range );
}

function random_weapon(weapons) {
    return weapons[randomNumber(weapons.length - 1)];
}

function random_zombie(zombie) {
    return zombie[randomNumber(zombie.length - 1 )];
}

function fightZombie(lifePoints) {
    alert("You are fighting for your life!");
    probability = Math.random();
    if ( probability >= 0.6 ) {
        
        return lifePoints - 1;
    } else {

        return lifePoints;
    }
}

function battle(weapons,zombies) {
    alert("you weapon for fight is " + random_weapon(weapons) + " and the type of zombie is " + random_zombie(zombies) + "Prepare for battle ");
}

function Alive(lifePoints) {
    if (lifePoints === 0) {
        alert("you are dead");
        return false;
    } else {
        alert("you are Alive");
        return true;
    }
}

function endGame(num_zombie,points) {
    if (num_zombie === 5 && Alive(points)) {
        return false;
    } else {
        return true;
    }
}

function statusGame(lifeP,zombie_death) {
    alert("your have " + lifeP + " LifePoints" + "and you has been kill the amount of " + zombie_death);
}
// MAIN FUNCTION

function zombieGame(lifeP,zombie_death,weapon,tZombie,Scenarios) {
    
    alert("The zombie game begins");
    var player_name = prompt("Introduzca su nombre");
    alert("Start with " + lifeP + " points of life" );
    alert("Try to survive in The " + Scenarios[randomNumber(Scenarios.length - 1)]);
    alert("your mission is kill 5 zombies to win");
    
    do {
        alert("finding the exit");
        battle(weapon,tZombie);
        if (fightZombie(lifeP) === lifeP) {
            alert("you win the battle this time");
            zombie_death++;
        } else {
            lifeP--;
            alert("you loose the battle this time");
        }
        statusGame(lifeP,zombie_death)
    } while (endGame(zombie_death,lifeP));

    alert("You win the game");
    return true;
}

zombieGame(lifePoints,0,listWeapons,typeZombie,beginScenarios);