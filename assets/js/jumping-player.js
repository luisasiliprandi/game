class JumpingPlayer {
  constructor() {
    this.jumpingPlayer = new Sprite({
      x: 0,
      y: 0,
      frameCount: 4,
      src: './assets/img/jump.png',
    });

    this.jumpingPlayer.animation = new AnimationFrame(3, () => this.draw());
    this.jumpingPlayer.animation.start();
  }

  tick() {
    this.jumpingPlayer.draw();
    this.jumpingPlayer.nextFrame();
  }

  draw() {}
}
