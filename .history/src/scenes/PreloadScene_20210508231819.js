import phaser from 'phaser';

class PreloadScene extends  Phaser.Scene{

    constructor(){
        super('PreloadScene')
       
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
    }
    create(){
        this.createBG();
    }
    update(){

    }

    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0);
    }
}

export default PreloadScene;