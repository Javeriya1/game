
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create,
    update
  }
};


function preload () {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('box','assets/bird.png')
  
}
var bird=null;

var totalDelta=null;

function create () {
  this.add.image(400, 300, 'sky');
  bird=this.physics.add.sprite(config.width*0.1 , config.height/2,'box')
  bird.body.gravity.y=200;
  }

  function update(time,delta){

    totalDelta+=delta;
    console.log(totalDelta)
  }

  new Phaser.Game(config);

