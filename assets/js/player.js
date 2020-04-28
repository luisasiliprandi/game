class Player {
  constructor() {
    this.player = new Sprite({
      x: 0,
      y: 0,
      frameCount: 3,
      src: './assets/img/estela.png',
    });

    // this.player.animation = new AnimationFrame(3, () => this.draw());
    // this.player.animation.start();
  }

  tick() {
    this.player.draw();
    this.player.nextFrame();
  }

  draw() {}
}
