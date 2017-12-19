// zombie game
var lifePoints = randomNumber(10);
var beginScenarios = ["hospital","school","highway","house","apartarment"];
var listWeapons = ["gun","bow","bomb","knife","axe","nuclear bomb"];
var typeZombie = ["litle zombie","dog zombie","cat zombie","snake zombie"];

var Zombie = class {
    constructor(name,tyzombie,lifeZ,status){
        this.name = name;
        this.tyzombie = tyzombie;
        this.lifeZ = lifeZ;
        this.status = status;
    }
        // getter
    get name(){
        return this.zombie_name();
    }
        //method
    zombie_name(){
        return this.name;
    }

      // getter
    get typzombie(){
        return this.type_zombie();
    }
            //method
    type_zombie(){
        return this.tyzombie;
    }

            // getter
    get zombielife{
        return this.zombie_life_points();
    }
        //method
    zombie_life_points(){
        return this.lifeZ;
    }

        // getter
    get zombieL(){
        return this.zombie_alive();
    }
            //method
    zombie_alive(){
        return this.status;
    }

        // getter
    get update_lifeZ(){
        return this.update_zombie_lifeZ();
    }
            //method
    update_zombie_lifeZ(){
        return this.lifeZ - 1;
    }
};

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
    if ( probability >= 0.4 ) {
        
        return lifePoints;
    } else {

        return lifePoints -1;
    }
}

function battle(weapons,zombies) {
    alert("you weapon for fight is " + random_weapon(weapons) + " and the type of zombie is " + random_zombie(zombies) + " Prepare for battle ");
}

function Alive(lifePoints) {
    if (lifePoints <= 0) {
        alert("you are dead and you loose the game");
        return false;
    } else {
        return true;
    }
}

function endGame(num_zombie,points) {
    if (num_zombie === 5 ) {
        if (Alive(points)) {
            //termino el juego vivo
            return false;
        } else {
            //termino el juego pero murio
            return true;
        }
    } else if (num_zombie > 2 && num_zombie <=4) {
        alert("you almost done to kill all the zombies");
    }
}

function statusGame(lifeP,zombie_death) {
    alert("your have " + lifeP + " LifePoints" + " and you has been kill the amount of " + zombie_death);
    Alive(lifeP);
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
        statusGame(lifeP,zombie_death);
    } while (endGame(zombie_death,lifeP));

    alert("You win the game " + player_name);
    return true;
}

zombieGame(lifePoints,0,listWeapons,typeZombie,beginScenarios);