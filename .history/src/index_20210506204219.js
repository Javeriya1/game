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

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
  this.load.image('pipe','assets/pipe.png')
}
const VELOCITY=200;

let bird = null;
let upperPipe = null;
let lowerPipe=null;
const flapVelocity=250;
const initialBirdPosition={x:config.width * 0.1,y:config.height / 2}

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, "bird");
  bird.body.gravity.y=400;
  upperPipe= this.physics.add.sprite(400,100,'pipe').setOrigin(0,1)
  lowerPipe=this.physics.add.sprite(400,upperPipe.y,'pipe').setOrigin(0,0);

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
