class Game {

    startGame() {
        const canvas = document.querySelector("#canvas");
        return canvas.getContext("2d");
    }

    createMap() {
        const image = new Image();
        image.src = this.src;
        return new Map(image);
    }

    createplayer() {
        return new Player()
    }

};