import phaser from 'phaser'

class PlayScene extends  Phaser.Scene{
    constructor(){
        super('PlayScene')
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
    }
    create(){

    }
    update(){

    }
}

export default PlayScene;