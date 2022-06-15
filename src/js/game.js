class Game {
    constructor() {
        this.musicRuta = document.getElementById("audioRuta");
        this.musicBattle = document.getElementById("audioBattle");
        //this.musicRuta.pause();
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

};