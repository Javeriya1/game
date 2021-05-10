import phaser from 'phaser'

class PlayScene extends  Phaser.Scene{
    constructor(){
        super('PlayScene')
        this.initialBirdPosition={
            x:
        }
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
    }
    create(){
        this.add.image(0, 0, "sky").setOrigin(0);
        bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, "bird");
        bird.body.gravity.y=400;

    }
    update(){

    }
}

export default PlayScene;