class Pokemon {
    constructor(posX, posY, image, matrix) {
        this.posX = posX;
        this.posY = posY;
        this.image = image;
        this.matrix = matrix;
        this.pokemonInGame = false;
        this.pokeball;
    }

    drawPokemon() {
        let pokemonImage = new Image();
        pokemonImage.src = `../src/imagenes_pokeballs/pokeball${this.pokeball}.png`;
        ctx.drawImage(pokemonImage, this.posY * 32, this.posX * 32, pokemonImage.width, pokemonImage.height);

    }

    clearPokemon() {
        ctx.clearRect(this.posX, this.posY, this.width, this.heigth);
    }

    spawnRandomPokemon() {
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

        console.log(this.posX)

        this.pokeball = Math.floor(Math.random() * 5 + 0);
        console.log(map.matrixCollisions[this.posX][this.posY]);
        map.matrixCollisions[this.posX][this.posY] = 2;
    }
}