import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
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
var bird = null;
var VELOCITY=200;

var totalDelta = null;

function create() {
  this.add.image(0, 0, "sky").setOrigin(0);
  bird = this.physics.add.sprite(config.width * 0.1, config.height / 2, "box");
  bird.body.velocity.x=200;
}

function update(time, delta) {}

new Phaser.Game(config);
