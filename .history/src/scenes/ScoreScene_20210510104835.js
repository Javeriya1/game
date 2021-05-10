import BaseScene from './BaseScene'

class ScoreScene extends  BaseScene{

    constructor(config){
        super('ScoreScene', config)

    
    }
    create(){
        super.create();
        
        const bestScoreText = localStorage.getItem('bestScore');
        
        
        
        
    }
}

export default ScoreScene;