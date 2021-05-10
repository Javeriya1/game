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
        
        this.createMenu(this.menu,this.setupMenuEvent);
        
    }
    setupMenuEvent(menuItem){
      const textGO = menuItem.textGO;
      textGO.setInteractive


    }
}

export default MenuScene;