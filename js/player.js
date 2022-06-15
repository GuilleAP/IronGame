class Player {
    constructor(matrix) {
        this.posX = 928;
        this.posY = 352;
        
        this.live = 100;

        this.pokeWins = 0;

        let image = new Image();
        image.src = "../src/imagenes_ash/ash_abajo.png";
        this.image = image;

        this.width = image.width;
        this.heigth = image.height;

        this.matrix = matrix;

        this.pokemons = [false, false, false, false, false, false, false];

        this.playerAttack = false;
    }

    drawPlayer() {
        ctx.drawImage(this.image, this.posX, this.posY, this.width, this.heigth);
    }

    clearPlayer() {
        ctx.clearRect(this.posX, this.posY, this.width, this.heigth);
    }

    nextPossiblePos(direction) {
        let x = this.posY / 32;
        let y = this.posX / 32;

        switch(direction) {
            case 'arriba':
                if(this.matrix[x - 1][y] == 1) {
                    return false;
                } else {
                    return true;
                }
    
            case 'abajo':
                if(this.matrix[x + 1][y] == 1) {
                    return false;
                } else {
                    return true;
                }
    
            case 'izquierda':
                if(this.matrix[x][y - 1] == 1) {
                    return false;
                } else {
                    return true;
                }
    
            case 'derecha':
                if(this.matrix[x][y + 1] == 1) {
                    return false;
                } else {
                    return true;
                }
        }
    }

    movePlayer(event) {
        switch(event.key) {
            case 'w':
                this.image.src = './src/imagenes_ash/ash_arriba.png';
                if(this.nextPossiblePos('arriba')) {
                    this.posY -= 32;
                }
                break;
    
            case 's':
                this.image.src = './src/imagenes_ash/ash_abajo.png';
                if(this.nextPossiblePos('abajo')) {
                    this.posY += 32;
                }
                break;
    
            case 'a':
                this.image.src = './src/imagenes_ash/ash_izquierda.png';
                if(this.nextPossiblePos('izquierda')) {
                    this.posX -= 32;
                }
                break;
    
            case 'd':
                this.image.src = './src/imagenes_ash/ash_derecha.png';
                if(this.nextPossiblePos('derecha')) {
                    this.posX += 32;
                }
                break;
        }

        console.log("PLAYER POSITION - Position X: ", this.posX/32, "POsition y: ", this.posY/32);
    
    }

    initialPokemon(initial) {
        switch(initial) {
            case 0:
                playerUI = new Image();
                playerUI.src = "../src/UI_player/0_UI_live3.png";
                initialPoke = new Image();
                initialPoke.src = "../src/bulbasaur_back.png";
                break;
        
            case 1:
                playerUI = new Image();
                playerUI.src = "../src/UI_player/1_UI_live3.png";
                initialPoke = new Image();
                initialPoke.src = "../src/charmander_back.png";
                break;
        
            case 2:
                playerUI = new Image();
                playerUI.src = "../src/UI_player/2_UI_live3.png";
                initialPoke = new Image();
                initialPoke.src = "../src/squirtle_back.png";
                break;
        
        }
    }

    drawPokeWins(pokeWin) {
        for(let i = 1; i < this.pokeWins + 1; i++) {
            ctx.drawImage(pokeWin, 1280 - (70 * i), 5, pokeWin.width, pokeWin.height);
        }
    }

    checkPokemonExist(pokemon) {
        if(this.pokemons[pokemon] === true) {
            return true;
        }

        return false;
    }

    getPokemons(pokemon) {
        this.pokemons[pokemon] = true;
    }

    checkAllPokemons() {
        
        for(let i = 0; i < this.pokemons.length; i++) {
            if(this.pokemons[i] === false) {
                return false;
            }
        }

        return true;
    }

    doAttack(e) {
        if(e !== undefined) {
            if(e.x > 40 && e.x < 325 && e.y > 665 && e.y < 690 ||
            e.x > 345 && e.x < 632 && e.y > 665 && e.y < 690 ||
            e.x > 650 && e.x < 940 && e.y > 665 && e.y < 690 ||
            e.x > 970 && e.x < 1250 && e.y > 665 && e.y < 690) {
                this.playerAttack = true;

            } else {
                this.playerAttack = false;
            }
        } else {
            this.playerAttack = false;
        }
        console.log(this.playerAttack);
    }

    makeAttack() {
        let attack = Math.round(Math.random() * 1 + 0);
        this.attack = false;

        if(attack === 0) {
            console.log("Player ha fallado");
            return false;
        } else {
            console.log("Player ha atacado");
            return true;
        }
        
    }

    setLive(playerUI, player) {
        if(this.live < 100 && this.live >= 66) {
            playerUI.src = `../src/UI_player/${player}_UI_live2.png`;
        } else if(this.live < 66 && this.live >= 32) {
            playerUI.src = `../src/UI_player/${player}_UI_live1.png`;
        }
    }

    playerDies() {
        if(this.live > 0) {
            return false;
        }

        return true;
    }

    checkWin() {
        if(this.pokeWins === 6) {
            return true;
        }

        return false;
    }

    
};