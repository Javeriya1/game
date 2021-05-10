import phaser from 'phaser';

class BaseScene extends  Phaser.Scene{

    constructor(key,config){
        super(key)
        this.config = config;
        this.screenCenter = [config.width/2, config.height/2]
    }
    create(){
        this.add.image(0, 0, "sky").setOrigin(0);
    }
    createMenu(menu){

        menu.forEach(menuItem => {
            const menuPosition = [...screenCenter];
            this.add.text(...menuPosition,menuItem.text,{fontSize:'28px',fill: '#CDFF00'})
        })
    }
}

export default BaseScene;