class Pokeball {
    constructor(posX, posY, matrix) {
        //POsicion de la pokeball en el mapa
        this.posX = posX;
        this.posY = posY;

        //Tipo de pokeball que va a aparecer
        this.pokeball;

        //Matriz de colisiones
        this.matrix = matrix;
    }

    drawPokeball() {
        let pokeballImage = new Image();
        pokeballImage.src = `./source/imagenes_pokeballs/pokeball${this.pokeball}.png`;
        ctx.drawImage(pokeballImage, this.posY * 32, this.posX * 32, pokeballImage.width, pokeballImage.height);

    }

    clearPokeball() {
        ctx.clearRect(this.posX, this.posY, this.width, this.heigth);
    }

    spawnRandomPokeball() {
        let okei = false;
        let positionRandom;
        while(!okei) {
            positionRandom = map.setRandomPosition();
            if(positionRandom !== undefined) {
                okei = true;
            }
        }
        this.posX = positionRandom[0];
        this.posY = positionRandom[1];
        
        this.pokeball = Math.floor(Math.random() * 5 + 0);
        map.matrixCollisions[this.posX][this.posY] = 2;
    }
}