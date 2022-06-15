class Pokemon {
    constructor() {
        this.pokemonInGame = false;
        this.pokeball;
        this.live = 100;
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
                enemyUI.src = "../src/UI_enemys/0_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/articuno_enemy.png";
                break;
        
            case 1:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/1_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/zapdos_enemy.png";
                break;
        
            case 2:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/2_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/moltres_enemy.png";
                break;
            
            case 3:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/3_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/dragonite_enemy.png";
                break;
        
            case 4:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/4_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/tyranitar_enemy.png";
                break;
        
            case 5:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/5_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/snorlax_enemy.png";
                break;
            
            case 6:
                enemyUI = new Image();
                enemyUI.src = "../src/UI_enemys/6_UI_live3.png";
                enemy = new Image();
                enemy.src = "../src/enemys/mewtwo_enemy.png";
                break;
        }
    }

    pokeDies() {
        if(this.live <= 0) {
            return false;
        }
        return true;
    }

    setLive(enemyUI, pokemonEnemy) {
        if(this.live < 100 && this.live > 66) {
            enemyUI.src = `../src/UI_enemys/${pokemonEnemy}_UI_live2.png`;
        } else if(this.live < 66 && this.live > 32) {
            enemyUI.src = `../src/UI_enemys/${pokemonEnemy}_UI_live1.png`;
        }
    }

    makeAttack() {
        let attack = Math.floor(Math.random() * 1 + 0);

        if(attack === 0) {
            console.log("pokemon ha fallado");
            return false;
        } else {
            console.log("pokemon ha atacado");
            return true;
        }
    }
}