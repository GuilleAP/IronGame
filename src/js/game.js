class Game {
    constructor() {
        this.musicRuta = document.getElementById("audioRuta");
        this.musicBattle = document.getElementById("audioBattle");
        
        this.initial;
        this.start = false;
    }

    startGame() {
        const canvas = document.querySelector("#canvas");
        return canvas.getContext("2d");
    }

    createMap() {
        const image = new Image();
        image.src = "./source/map.png";
        return image;
    }

    createplayer() {
        return new Player()
    }

    playMusicRoute() {
        this.musicRuta.play();
        this.musicBattle.pause();
    }

    pauseMusicRoute() {
        this.musicRuta.pause();
    }

    playMusicBattle() {
        this.musicRuta.pause();
        this.musicBattle.play();
    }

    pauseMusicBattle() {
        this.musicBattle.pause();
    }

    battle(canvas, battleBackground, enemyUI, playerUI, enemy, initialPoke, attackBarBattle) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(battleBackground, 0, 0, battleBackground.width, battleBackground.height);
        ctx.drawImage(enemyUI, 2*32, 1*32, enemyUI.width, enemyUI.height);
        ctx.drawImage(playerUI, 24*32, 14*32, playerUI.width, playerUI.height);
        ctx.drawImage(enemy, 24*32, 1*32, enemy.width, enemy.height);
        ctx.drawImage(initialPoke, 3*32, 10*32, initialPoke.width, initialPoke.height);
        ctx.drawImage(attackBarBattle, 0, 640, attackBarBattle.width, attackBarBattle.height);
    }

    gameOver(player) {

        let image = new Image();
        image.src = "./source/game_over.png";

        ctx.drawImage(image, 0, 0, image.width, image.height);

        for(let i = 0; i < player.pokemons.length; i++) {
            if(player.pokemons[i] === true) {
                let pokemon = new Image();
                pokemon.src = `./source/enemys/${i}.png`;
                ctx.drawImage(pokemon, (i+1) * 32 + 500 , 10*32, 100, 100);
            }
        }
    }

    choseInitialPokemon(e) {
        if(e !== undefined) {
            if(e.x > 50 && e.x < 350 && e.y > 200 && e.y < 500) {
                this.initial = 0;
                this.start = true;
    
            } else if(e.x > 490 && e.x < 790 && e.y > 200 && e.y < 500) {
                this.initial = 1;
                this.start = true;
    
            } else if(e.x > 930 && e.x < 1230 && e.y > 200 && e.y < 500) {
                this.initial = 2;
                this.start = true;
    
            } else {
                this.start = false;
            }

        } else {
            this.start = false;

        }
    }
   
};