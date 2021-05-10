import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      
      debug:true,
     
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const VELOCITY=200;
const PIPES_TO_RENDER=4;

let bird = null;

let upperPipe = null;
let lowerPipe=null;
let pipeHorizontalDistance=0;

const pipeVerticalDistanceRange=[150,250];


const flapVelocity=250;
const initialBirdPosition={x:config.width * 0.1,y:config.height / 2}


function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
  this.load.image('pipe','assets/pipe.png')
}

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, "bird");
  bird.body.gravity.y=400;

  for(let i=0;i<PIPES_TO_RENDER;i++){
    pipeVerticalDistance=+400;
    let pipeVerticalDistance=Phaser.Math.Between(pipeVerticalDistanceRange[0],pipeVerticalDistanceRange[1])
    let pipeVerticalPosition=Phaser.Math.Between(0+20,config.height-20-pipeVerticalDistance)

    upperPipe= this.physics.add.sprite(400,pipeVerticalPosition,'pipe').setOrigin(0,1)
    lowerPipe=this.physics.add.sprite(400,upperPipe.y+pipeVerticalDistance,'pipe').setOrigin(0,0);

  }

 
 

  this.input.on('pointerdown',flap);

  this.input.keyboard.on('keydown_SPACE',flap);
}


function update(time, delta) {

  if(bird.y>config.height || bird.y<-bird.height){
    restartBirdPosition()
  }
 
}

function restartBirdPosition(){
 bird.x=initialBirdPosition.x;
 bird.y=initialBirdPosition.y;
 bird.body.velocity.y=0;
}

function flap(){
  bird.body.velocity.y=-flapVelocity;
}

new Phaser.Game(config);
