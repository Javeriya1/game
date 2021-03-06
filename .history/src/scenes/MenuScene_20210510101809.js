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
        
        this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem));
        
    }
    setupMenuEvents(menuItem){
      const textGO = menuItem.textGO;
      textGO.setInteractive();

      textGO.on('pointerover',() => {
          textGO.setStyle({fill: '#ff0'});
      })

      textGO.on('pointerout',() => {
        textGO.setStyle({fill: '#fff'});
      })


    }
}

export default MenuScene;