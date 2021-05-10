import phaser from 'phaser'

const PIPES_TO_RENDER = 4;


class PlayScene extends  Phaser.Scene{

    constructor(config){
        super('PlayScene')
        this.config = config;

        this.bird = null;
        this.pipes = null;

        this.pipeHorizontalDistance = 0;
        this.pipeVerticalDistanceRange = [150,250];
        this.pipeHorizontalDistanceRange = [500,550];
        this.flapVelocity = 300;
        this.score=0;
        this.scoreText='';

    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
        this.load.image('pipe','assets/pipe.png')
    }
    create(){
        this.createBG();
        this.createBird();
        this.createPipes();
        this.createColliders();
        this.createScore();
        this.handleInputs();
    }
    update(){
        this.checkGameStatus();
        this.recyclePipes();

    }

    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0);
    }

    createBird(){
        this.bird = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, "bird");
        this.bird.body.gravity.y = 600;
        this.bird.setCollideWorldBounds(true);

    } 

    createPipes(){
        this.pipes = this.physics.add.group();
        for(let i = 0; i < PIPES_TO_RENDER; i++){

        const upperPipe = this.pipes.create(0,0,'pipe')
        .setImmovable(true)
        .setOrigin(0,1)
        const lowerPipe = this.pipes.create(0,0,'pipe')
        .setImmovable(true)
        .setOrigin(0,0);

        this.placePipe(upperPipe,lowerPipe)
        }

       this.pipes.setVelocityX(-200);
    }

    createColliders(){
        this.physics.add.collider(this.bird,this.pipes,this.gameOver,null,this);
    }

    createScore(){
        this.score = 0;
        const bestSCore = localStorage,getItem()
        this.scoreText = this.add.text(16,16,`Score:${0}`,{fontSize:'28px',fill:'#000'});
        this.bestScoreText = this.add.text(16,50,`BestScore:${0}`,{fontSize:'20px',fill:'#000'}) 
    }

    handleInputs(){

        this.input.on('pointerdown',this.flap,this);
        this.input.keyboard.on('keydown_SPACE',this.flap,this);
    }

    checkGameStatus(){
        if(this.bird.getBounds().bottom >= this.config.height || this.bird.getBounds().top <= 0){
            this.gameOver()
        }
    }
    
    placePipe(uPipe,lPipe){
        
        const rightMostX = this.getRightMostPipe();
        const pipeVerticalDistance = Phaser.Math.Between(this.pipeVerticalDistanceRange[0],this.pipeVerticalDistanceRange[1])
        const pipeVerticalPosition = Phaser.Math.Between(0 + 20,this.config.height - 20 -pipeVerticalDistance)
        const pipeHorizontalDistance = Phaser.Math.Between(...this.pipeHorizontalDistanceRange);
       
        uPipe.x = rightMostX + pipeHorizontalDistance;
        uPipe.y = pipeVerticalPosition;
       
        lPipe.x = uPipe.x;
        lPipe.y = uPipe.y + pipeVerticalDistance;
    }
       
    recyclePipes(){
        const tempPipes = [];
        this.pipes.getChildren().forEach(pipe=>{
        if(pipe.getBounds().right<=0){
        //recycle pipe
        //get here upper and lower pipes that are out of bounds
        tempPipes.push(pipe);
        if(tempPipes.length === 2){
        this.placePipe(...tempPipes);
        this.increaseScore();
        }
        }
       })
    }
      
    getRightMostPipe(){
        let rightMostX = 0;
      
        this.pipes.getChildren().forEach(function(pipe){
          rightMostX = Math.max(pipe.x, rightMostX);
        })
        return rightMostX;
      
    }

    gameOver(){
        this.physics.pause();
        this.bird.setTint(0xff0000);

        this.time.addEvent({
            delay: 1000,
            callback: () => {
                this.scene.restart();
            },
            loop:false
        })
    }
       
    flap(){
        this.bird.body.velocity.y = -this.flapVelocity;
    }

    increaseScore(){
        this.score++;
        this.scoreText.setText(`Score:${this.score}`);
    }
}

export default PlayScene;