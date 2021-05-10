import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
       gravity: { y: 200 },
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
  this.load.image("box", "assets/bird.png");
}
const VELOCITY=200;

let bird = null;
let flapVelocity=250;
let totalDelta = null;

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "box");

  this.input.on('pointerdown',flap);

  this.input.keyboard.on('keydown_SPACE',flap);
}


function update(time, delta) {
 
}

function flap(){
  bird.body.velocity.y=-flapVelocity;
}

new Phaser.Game(config);
