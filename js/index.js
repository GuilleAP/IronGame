let game = new Game();
const ctx = game.startGame();

const backgroundImage = game.createMap();

const battleBackground = new Image();
battleBackground.src = "../src/battleBaclground.png";
const attackBar = new Image();
attackBar.src = "../src/attack_bar.png";
const attackBarBattle = new Image();
attackBarBattle.src = "../src/attack_bar_battle.png";
const pokeWin = new Image();
pokeWin.src = "../src/pokeWin.png";

let audioFail = new Audio("../src/sound/fail_sound.mp3");
let audioHit = new Audio("../src/sound/hit_sound.mp3");




let map = new Mapa();
let player = new Player(map.matrixCollisions);
let pokeball;


let initialPlayer = 1;

let playerUI, enemyUI, poke;
let initialPoke, enemy, pokeEnemy;

player.initialPokemon(initialPlayer);

let canSpawn = false;
let isBattle = false;
let musicBattle = false;
let audioRoute = false;
let gameOver = false;
let startBattle = false;
let isPokeball = false;
let music = true;
let turno = 0;
let frameCounterPokemon;
let playerAttack = false;

function loop() {


    if(!isBattle) {

        if(music) {
            game.playMusicRoute();
            music = false;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(backgroundImage, 0, 0, backgroundImage.width, backgroundImage.height);
        ctx.drawImage(attackBar, 0, 640, attackBar.width, attackBar.height);
        player.drawPokeWins(pokeWin);

        player.drawPlayer();

        if(!isPokeball) {
            pokeball = new Pokeball(19*32, 8*32, map.matrixCollisions);
            isPokeball = true;
        }

        if(canSpawn === false) {
            pokeball.spawnRandomPokeball();
            canSpawn = true;
        } 
        if(canSpawn === true) {
            pokeball.drawPokeball();
        }


        if(map.matrixCollisions[player.posY/32][player.posX/32] === 2){
            canSpawn = false;
            map.matrixCollisions[player.posY/32][player.posX/32] = 0;
            pokeball.clearPokeball();
            isBattle = true;
        } 

        if(player.checkWin()) {
            //PANTALLA WIN!!
        }
    }

    if(isBattle) {

        if(!music) {
            game.playMusicBattle();
            music = true;
        }
        
        if(!startBattle) {
            poke = new Pokemon();
            let battleWin = false;
            pokeEnemy = poke.setRandomBattle();
            poke.setBattle(pokeEnemy);
            console.log(enemy);
            game.battle(canvas, battleBackground, enemyUI, playerUI, enemy, initialPoke, attackBarBattle);
            startBattle = true;
            frameCounterPokemon = 0;
        }
        
        if(startBattle) {
            poke.setLive(enemyUI, pokeEnemy);
            game.battle(canvas, battleBackground, enemyUI, playerUI, enemy, initialPoke, attackBarBattle);

            if(turno === 0) {  

                if(player.playerAttack) {
                    if(player.makeAttack()) {
                        poke.live -= 34;
                        audioHit.play();
                    } else {
                        audioFail.play();
                    }

                    poke.setLive(enemyUI, pokeEnemy);

                    if(poke.pokeDies()) {
                        if(!player.checkPokemonExist(poke.pokeNumber)) {
                            player.getPokemons(poke.pokeNumber);
                            player.pokeWins++;
                        }
                        
                        playerUI.src = `../src/UI_player/${initialPlayer}_UI_live3.png`

                        isBattle = false;
                        startBattle = false;
                        turno = 0;
                    }

                    turno = 1;
                    player.playerAttack = false;

                } else {
                    turno = 0;
                }

            }
            
            if(turno === 1) {
                    
                if(frameCounterPokemon === 200) {
                    if(poke.makeAttack()) {
                        player.live -= 34;
                        audioHit.play();
                    } else {
                        audioFail.play();
                    }

                    player.setLive(playerUI, initialPlayer);

                    if(player.playerDies()) {
                        //PANTALLA DE GAME OVER
                    }

                    turno = 0;
                    frameCounterPokemon = 0;
                }
                frameCounterPokemon += 1;
            }

        }
    }
    
    requestAnimationFrame(loop);
}
    

function move(e) {
    player.movePlayer(e);
}

function attack(e) {
    player.doAttack(e);
}

addEventListener("keypress", move);
addEventListener("click", attack);


loop();


