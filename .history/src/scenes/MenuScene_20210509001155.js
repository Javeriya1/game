import BaseScene from './BaseScene'

class MenuScene extends  BaseScene{

    constructor(config){
        super('MenuScene', config)

        this.menu = [
            { scene : 'PlayScene', text: 'Play'}
        ]
    }
    create(){
        super.create();
        
    }
}

export default MenuScene;