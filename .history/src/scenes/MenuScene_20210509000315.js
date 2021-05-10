import BaseScene from './BaseScene'

class MenuScene extends  BaseScene{

    constructor(config){
        super('MenuScene')
        this.config = config;
    }
    create(){
        this.createBG();
        this.scene.start('PlayScene')
    }
    update(){

    }

    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0);
    }
}

export default MenuScene;