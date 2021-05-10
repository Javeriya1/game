import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH*0.1, y:HEIGHT/2}

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
    default: "arcade",
    arcade: {
      
      debug:true,
     
    },
  },
  scene: [new PlayScene(SHARED_CONFIG)]
};

const VELOCITY = 200;
const PIPES_TO_RENDER = 4;

let bird = null;
let pipes = null;


let pipeHorizontalDistance=0;

const pipeVerticalDistanceRange=[150,250];
const pipeHorizontalDistanceRange=[500,550];


const flapVelocity=250;
const initialBirdPosition={x:config.width * 0.1,y:config.height / 2}








function restartBirdPosition(){
 bird.x=initialBirdPosition.x;
 bird.y=initialBirdPosition.y;
 bird.body.velocity.y=0;
}

function placePipe(uPipe,lPipe){
 
    const rightMostX=getRightMostPipe();
    const pipeVerticalDistance=Phaser.Math.Between(pipeVerticalDistanceRange[0],pipeVerticalDistanceRange[1])
    const pipeVerticalPosition=Phaser.Math.Between(0+20,config.height-20-pipeVerticalDistance)
    const pipeHorizontalDistance=Phaser.Math.Between(...pipeHorizontalDistanceRange);

   uPipe.x= rightMostX + pipeHorizontalDistance;
   uPipe.y= pipeVerticalPosition;

   lPipe.x=uPipe.x;
   lPipe.y=uPipe.y + pipeVerticalDistance;

    

}

function recyclePipes(){
  const tempPipes=[];
  pipes.getChildren().forEach(pipe=>{
  if(pipe.getBounds().right<=0){
    //recycle pipe
    //get here upper and lower pipes that are out of bounds
    tempPipes.push(pipe);
    if(tempPipes.length===2){
      placePipe(...tempPipes);
    }
  }
})

}

function getRightMostPipe(){
  let rightMostX=0;

  pipes.getChildren().forEach(function(pipe){
    rightMostX=Math.max(pipe.x, rightMostX);
  })
  return rightMostX;

}


function flap(){
  bird.body.velocity.y=-flapVelocity;
}

new Phaser.Game(config);
