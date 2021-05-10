
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
    create
  }
};

new Phaser.Game(config);

function preload () {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('box','assets/bird.png')
}

function create () {
  this.add.image(400, 300, 'sky');
  this.add.sprite(config.width*0.1 , config.height/2,'box').setOrigin(0);
}
