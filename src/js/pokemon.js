class Pokemon {
    constructor() {
        this.pokemonInGame = false;
        this.pokeball;
        this.live = 100;
        this.pokeNumber;
    }

    setRandomBattle() {
        let probability = [0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 
                           4, 4, 4, 4, 5, 5, 5, 5, 5, 6];

        return probability[Math.floor(Math.random() * probability.length + 0)];
    }

    setBattle(pokemonEnemy) {
        switch(pokemonEnemy) {
            case 0:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/0_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/0.png";
                this.pokeNumber = 0;
                break;
        
            case 1:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/1_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/1.png";
                this.pokeNumber = 1;
                break;
        
            case 2:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/2_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/2.png";
                this.pokeNumber = 2;
                break;
            
            case 3:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/3_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/3.png";
                this.pokeNumber = 3;
                break;
        
            case 4:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/4_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/4.png";
                this.pokeNumber = 4;
                break;
        
            case 5:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/5_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/5.png";
                this.pokeNumber = 5;
                break;
            
            case 6:
                enemyUI = new Image();
                enemyUI.src = "./source/UI_enemys/6_UI_live3.png";
                enemy = new Image();
                enemy.src = "./source/enemys/6.png";
                this.pokeNumber = 6;
                break;
        }
    }

    pokeDies() {
        if(this.live > 0) {
            return false;
        }
        return true;
    }

    setLive(enemyUI, pokemonEnemy) {
        if(this.live < 100 && this.live >= 66) {
            enemyUI.src = `./source/UI_enemys/${pokemonEnemy}_UI_live2.png`;
        } else if(this.live < 66 && this.live >= 32) {
            enemyUI.src = `./source/UI_enemys/${pokemonEnemy}_UI_live1.png`;
        }
    }

    makeAttack() {
        let attackArray = [0, 0, 0, 1, 0, 1, 0, 1, 0, 0];
        let attack = Math.round(Math.random() * attackArray.length + 0);

        if(attackArray[attack] === 0) {
            console.log("pokemon ha fallado");
            return false;
        } else {
            console.log("pokemon ha atacado");
            return true;
        }
    }
}