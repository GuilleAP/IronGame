let initial = document.querySelector(".bulbasaur");
console.log(initial);

let game = new Game();
const ctx = game.startGame();

const backgroundImage = game.createMap();

const battleBackground = new Image();
battleBackground.src = "./source/battleBaclground.png";
const attackBar = new Image();
attackBar.src = "./source/attack_bar.png";
const attackBarBattle = new Image();
attackBarBattle.src = "./source/attack_bar_battle.png";
const pokeWin = new Image();
pokeWin.src = "./source/pokeWin.png";

let audioFail = new Audio("./source/sound/fail_sound.mp3");
let audioHit = new Audio("./source/sound/hit_sound.mp3");
let audioRuta = new Audio("./source/sound/route_audio.mp3");
let audioBattle = new Audio("./source/sound/battle_audio.mp3");
let audioFinal = new Audio("./source/sound/pokemon_theme.mp3");
let audioEnding = new Audio("./source/sound/ending_theme.mp3");




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
let win = false;


function loop() {

    if(gameOver) {
        audioBattle.pause();
        audioFinal.play()
        game.gameOver(player);

    } else if(win) {

        audioBattle.pause();
        audioEnding.play();
        let imageWin = new Image();
        imageWin.src = "./source/final_game.png";

        ctx.drawImage(imageWin, 0, 0, imageWin.width, imageWin.height);

    } else {
    
        if(!isBattle) {
            audioBattle.pause()
            audioRuta.play();

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
                win = true;
            }
        }

        if(isBattle) {

            audioRuta.pause()
            audioBattle.play()
            
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

                            if(player.pokeWins === 6) {
                                win = true;
                            }
                            
                            playerUI.src = `./source/UI_player/${initialPlayer}_UI_live3.png`
                            player.live = 100;

                            isBattle = false;
                            startBattle = false;
                            turno = 0;
                        } else {
                            turno = 1;
                        }

                        player.playerAttack = false;

                    } else {
                        turno = 0;
                    }

                }
                
                if(turno === 1) {
                        
                    if(frameCounterPokemon === 150) {
                        if(poke.makeAttack()) {
                            player.live -= 34;
                            audioHit.play();
                        } else {
                            audioFail.play();
                        }

                        player.setLive(playerUI, initialPlayer);

                        if(player.playerDies()) {
                            gameOver = true;
                        }

                        turno = 0;
                        frameCounterPokemon = 0;
                    }
                    frameCounterPokemon += 1;
                }

            }

        
        }
    }
    
    requestAnimationFrame(loop);
    console.log(turno);
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


