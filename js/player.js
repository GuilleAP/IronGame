class Player {
    constructor(matrix) {
        this.posX = 928;
        this.posY = 352;
        

        let image = new Image();
        image.src = "../src/imagenes_ash/ash_abajo.png";
        this.image = image;

        this.width = image.width;
        this.heigth = image.height;

        this.matrix = matrix;
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

    
    
};