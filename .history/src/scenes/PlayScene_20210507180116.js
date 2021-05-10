import phaser from 'phaser'

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
    }
    create(){
        this.add.image(0, 0, "sky").setOrigin(0);
        this.bird = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, "bird");
        this.bird.body.gravity.y = 400;

        pipes=this.physics.add.group();

        for(let i=0;i<PIPES_TO_RENDER;i++){

        const upperPipe= pipes.create(0,0,'pipe').setOrigin(0,1)
        const lowerPipe=pipes.create(0,0,'pipe').setOrigin(0,0);

        placePipe(upperPipe,lowerPipe)
   
       }

       pipes.setVelocityX(-200);

       this.input.on('pointerdown',flap);
       this.input.keyboard.on('keydown_SPACE',flap);

    }
    update(){

    }
}

export default PlayScene;