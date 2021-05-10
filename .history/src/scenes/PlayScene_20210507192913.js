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
        this.flapVelocity = 250;

    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
        this.load.image('pipe','assets/pipe.png')
    }
    create(){
        
        this.createBG();
        this.createBird();
        

        

       this.input.on('pointerdown',this.flap,this);
       this.input.keyboard.on('keydown_SPACE',this.flap,this);

    }
    update(){
        if(this.bird.y > this.config.height || this.bird.y < - this.bird.height){
            this.restartBirdPosition()
          }
          this.recyclePipes();

    }

    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0);
    }

    createBird(){
        this.bird = this.physics.add.sprite(this.config.startPosition.x, this.config.startPosition.y, "bird");
        this.bird.body.gravity.y = 400;

    } 

    createPipes(){
        this.pipes = this.physics.add.group();
        for(let i = 0; i < PIPES_TO_RENDER; i++){

        const upperPipe = this.pipes.create(0,0,'pipe').setOrigin(0,1)
        const lowerPipe = this.pipes.create(0,0,'pipe').setOrigin(0,0);

        this.placePipe(upperPipe,lowerPipe)
   
       }

       this.pipes.setVelocityX(-200);

    }

    handleInputs(){

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
         const tempPipes=[];
         this.pipes.getChildren().forEach(pipe=>{
         if(pipe.getBounds().right<=0){
           //recycle pipe
           //get here upper and lower pipes that are out of bounds
           tempPipes.push(pipe);
           if(tempPipes.length===2){
            this.placePipe(...tempPipes);
           }
         }
       })
       
       }
      
       getRightMostPipe(){
        let rightMostX=0;
      
        this.pipes.getChildren().forEach(function(pipe){
          rightMostX=Math.max(pipe.x, rightMostX);
        })
        return rightMostX;
      
      }
      restartBirdPosition(){
        this.bird.x = this.config.startPosition.x;
        this.bird.y = this.config.startPosition.y;
        this.bird.body.velocity.y = 0;
       }
       
      
      flap(){
        this.bird.body.velocity.y = -this.flapVelocity;
      }
      
       
       
}

export default PlayScene;