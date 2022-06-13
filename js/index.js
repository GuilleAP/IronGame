const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "./src/map.png";

const dragoniteImage = new Image();
dragoniteImage.src = "./src/imagenes_pokemon/charmander_tile.png";

const battleBackground = new Image();
battleBackground.src = "../src/battleBaclground.png";

let map = new Mapa();
let player = new Player(map.matrixCollisions);
let pokemon = new Pokemon(19*32, 8*32, map.matrixCollisions);


let initialPlayer = 2;
let pokemonEnemy = 0;

let playerUI, enemyUI;
let initialPoke, enemy;

switch(initialPlayer) {
    case 0:
        playerUI = new Image();
        playerUI.src = "../src/UI_player/charmander_UI_live3.png";
        initialPoke = new Image();
        initialPoke.src = "../src/charmander_back.png";
        break;

    case 1:
        playerUI = new Image();
        playerUI.src = "../src/UI_player/bulbasaur_UI_live3.png";
        console.log("entra");
        initialPoke = new Image();
        initialPoke.src = "../src/bulbasaur_back.png";
        break;

    case 2:
        playerUI = new Image();
        playerUI.src = "../src/UI_player/squirtle_UI_live3.png";
        initialPoke = new Image();
        initialPoke.src = "../src/squirtle_back.png";
        break;

}

switch(pokemonEnemy) {
    case 0:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemys/snorlax_UI_live3.png";
        enemy = new Image();
        enemy.src = "../src/enemys/snorlax_enemy.png";
        break;

    case 1:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;

    case 2:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;
    
    case 3:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;

    case 4:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;

    case 5:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;
    
    case 6:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;

    case 7:
        enemyUI = new Image();
        enemyUI.src = "../src/UI_enemy/";
        enemy = new Image();
        enemy.src = "../src/";
        break;

}


let canSpawn = false;
let isBattle = false;
let musicBattle = false;
let audioRoute = false;

function loop() {

    if(!audioRoute) {
        //let audio = document.getElementById("audioRuta");
        //audio.play();
        audioRoute = true;
    }

    if(!isBattle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);

        player.drawPlayer();

        if(canSpawn === false) {
            pokemon.spawnRandomPokemon();
            canSpawn = true;
        } 
        if(canSpawn === true) {
            pokemon.drawPokemon();
        }


        if(map.matrixCollisions[player.posY/32][player.posX/32] === 2){
            canSpawn = false;
            map.matrixCollisions[player.posY/32][player.posX/32] = 0;
            pokemon.clearPokemon();
            isBattle = true;
        } 
    }

    if(isBattle) {
        //audio.stop();
    
        //if(!musicBattle) {
            //let audio = document.getElementById("audioBattle");
            //audio.play();
        //}
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(battleBackground, 0, 0, battleBackground.width, battleBackground.height);
        ctx.drawImage(enemyUI, 2*32, 1*32, enemyUI.width, enemyUI.height);
        ctx.drawImage(playerUI, 24*32, 14*32, playerUI.width, playerUI.height);
        ctx.drawImage(enemy, 24*32, 1*32, enemy.width, enemy.height);
        ctx.drawImage(initialPoke, 3*32, 10*32, initialPoke.width, initialPoke.height);
        musicBattle = true;
        
    }
    
    requestAnimationFrame(loop);
}
    

function move(e) {
    player.movePlayer(e);
}

addEventListener("keypress", move);

loop();


