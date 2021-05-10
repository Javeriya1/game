import phaser from 'phaser'

class PlayScene extends  Phaser.Scene{

    constructor(config){
        super('PlayScene')
        this.config.
        this.bird = null;
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
    }
    create(){
        this.add.image(0, 0, "sky").setOrigin(0);
        this.bird = this.physics.add.sprite(this.initialBirdPosition.x, this.initialBirdPosition.y, "bird");
        this.bird.body.gravity.y = 400;

    }
    update(){

    }
}

export default PlayScene;