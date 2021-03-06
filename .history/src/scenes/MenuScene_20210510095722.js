import BaseScene from './BaseScene'

class MenuScene extends  BaseScene{

    constructor(config){
        super('MenuScene', config)

        this.menu = [
            { scene : 'PlayScene', text: 'Play'},
            { scene : 'ScoreScene', text: 'Score'},
            { scene : null, text: 'Exist'}

        ]
    }
    create(){
        super.create(); 
        
        this.createMenu(this.menu);
        
    }
    setupMenuEvent(){

    }
}

export default MenuScene;