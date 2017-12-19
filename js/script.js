// zombie game
var lifePoints = randomNumber(10);
var beginScenarios = ["hospital","school","highway","house","apartarment"];
var listWeapons = ["gun","bow","bomb","knife","axe","nuclear bomb"];
var typeZombie = ["litle zombie","dog zombie","cat zombie","snake zombie"];
// litle zombie max 2 de vida, dog zombie 4, cat zombie 3, snake zombie 5

class Zombie {
    constructor(name,tyzombie,lifeZ,status){
        this._name = name;
        this._tyzombie = tyzombie;
        this._lifeZ = lifeZ;
        this._status = status;
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
    get typeZombie(){
        return this.typ_zombie();
    }
            //method
    typ_zombie(){
        return this.tyzombie;
    }

            // getter
    get zombiePoints(){
        return this.zombie_life_points();
    }
        //method
    zombie_life_points(){
        return this.lifeZ;
    }

        // getter
    get zombie_life(){
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
}

class Player{
    constructor(name,lifeP,status){
        this._name = name;
        this._lifeP = lifeP;
        this._status = status;
    }
        // getter
    get player_name(){
        return this.p_name();
    }
        //method
    p_name(){
        return this.name;
    }

            // getter
    get player_points(){
        return this.player_life_points();
    }
        //method
    player_life_points(){
        return this.lifeZ;
    }

        // getter
    get player_alife(){
        return this.p_alive();
    }
            //method
    p_alive(){
        return this.status;
    }

        // getter
    get update_lifeP(){
        return this.update_player_lifeP();
    }
            //method
    update_player_lifeP(){
        return this.lifeP - 1;
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
        // gano
        return lifePoints;
    } else {
        // perdio
        return lifePoints -1;
    }
}

function Alive(lifePoints) {
    if (lifePoints <= 0) {
        alert("you are dead and you loose the game");
        return false;
    } else {
        return true;
    }
}

function battle(player,weapons,tzombies,list_zomb,lifeP,zombie_death) {
    do {
        ran_weapon = random_weapon(weapons);
        t_zomb = random_zombie(tzombies);
        alert("you weapon for fight is " + ran_weapon + " and the type of zombie is " + t_zomb + " Prepare for battle ");  
        var lp_zomb;
        for (let index = 0; index < list_zomb.length; index++) {
            // pelea vs cada Zombie
            if (fightZombie(list_zomb[index].lifeP) === lifeP) {
                alert("you win the battle this time");
                zombie_death++;
            } else {
                lifeP--;
                player.update_lifeP;
                alert("you loose the battle this time")
            }
            // trayendo los puntos de vida del zombie
            if (list_zomb[index].typeZombie === t_zomb) {
                lp_zomb = list_zomb[index].lifeZ;
            }            
        }
    } while (Alive(player.lifeP) && Alive(lp_zomb));
        
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

function zombieGame(Player,list_Zombies,lifeP,zombie_death,weapon,tZombie,Scenarios) {

    alert("Start with " + Player.lifeP + " points of life" );
    alert("Try to survive in The " + Scenarios[randomNumber(Scenarios.length - 1)]);
    alert("your mission is kill 5 zombies to win");
    
    do {
        alert("finding the exit");
        battle(Player,weapon,tZombie,list_zombies,Player.lifeP,zombie_death);
        statusGame(player_name.lifeP,zombie_death);
    } while (endGame(zombie_death,Player.lifeP));

    alert("You win the game " + Player.player_name);
    return true;
}


/////////////////////
/////////////////////
/////////////////////
alert("The zombie game begins");
var player_name = prompt("Introduzca su nombre");
plyr = new Player(player_name,lifePoints,1);

// generating list of zombies
alert("Generating all the Zombies");
list_zombies = [];
for (let index = 0; index < 5; index++) {
    var z = typeZombie[randomNumber(3)];
    var lpz = 0;
    if ( z === "litle zombie") {
        lpz = 2;
    } else if ( z === "cat zombie"){
        lpz = 3;
    } else if ( z === "dog zombie") {
        lpz = 4;
    } else {
        // shnake zombie
        lpz = 5;
    }
    var zomb_name = z + " of the Valley"; 
    var zomb = new Zombie( zomb_name,z,lpz,1);
    list_zombies.push(zomb);
}

zombieGame(plyr,list_zombies,lifePoints,0,listWeapons,typeZombie,beginScenarios);