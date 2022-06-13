const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "./src/map.png";
const dragoniteImage = new Image();
dragoniteImage.src = "./src/imagenes_pokemon/charmander_tile.png";
//const ballImage = new Image();
//ballImage.src = "../src/imagenes_pokeballs/hackerball_tile.png";

let map = new Mapa();
let player = new Player(map.matrixCollisions);
let pokemon = new Pokemon(19*32, 8*32, map.matrixCollisions);

//pokemon.spawnRandomPokemon();
let canSpawn = false;


function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
    //pokemon.drawPokemon();
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
    }
    requestAnimationFrame(loop);
}
    

function move(e) {
    player.movePlayer(e);
}

addEventListener("keypress", move);

loop();


