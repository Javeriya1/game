import BaseScene from './BaseScene'

class ScoreScene extends  BaseScene{

    constructor(config){
        super('ScoreScene', config)

    
    }
    create(){
        super.create();
        
        const bestScore = localStorage.getItem('bestScore');
        this.add.text(...this.screenCenter)
        
        
        
    }
}

export default ScoreScene;