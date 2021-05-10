import phaser from 'phaser';

class MenuScene extends  Phaser.Scene{

    constructor(config){
        super('MenuScene')
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
    }
    create(){
        this.createBG();
    }
    update(){

    }
}

export default MenuScene;