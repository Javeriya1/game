import phaser from 'phaser'

const PIPES_TO_RENDER = 4;

class PlayScene extends  Phaser.Scene{

    constructor(config){
        super('PlayScene')
        this.config = config;
        this.bird = null;
        this.pipes = null;
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
        this.load.image('pipe','assets/pipe.png')
    }
    create(){
        this.add.image(0, 0, "sky").setOrigin(0);
        this.bird = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, "bird");
        this.bird.body.gravity.y = 400;

        this.pipes=this.physics.add.group();

        for(let i=0;i<PIPES_TO_RENDER;i++){

        const upperPipe = this.pipes.create(0,0,'pipe').setOrigin(0,1)
        const lowerPipe = this.pipes.create(0,0,'pipe').setOrigin(0,0);

        this.placePipe(upperPipe,lowerPipe)
   
       }

       this.pipes.setVelocityX(-200);

       this.input.on('pointerdown',this.flap);
       this.input.keyboard.on('keydown_SPACE',this.flap);

    }
    update(){
        if(this.bird.y > this.config.height || this.bird.y < - this.bird.height){
            this.restartBirdPosition()
          }
          this.recyclePipes();

    }
}

export default PlayScene;