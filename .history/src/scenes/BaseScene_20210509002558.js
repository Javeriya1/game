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
       let lastMenu
        menu.forEach(menuItem => {
            const menuPosition = [this.screenCenter[0],];
            this.add.text(...menuPosition,menuItem.text,{fontSize:'28px',fill: '#CD00FF'})
        })
    }
}

export default BaseScene;