class Background {
  constructor() {
    this.background = new Sprite({
      x: 0,
      y: 0,
      frameCount: 10,
      src: './assets/img/background.png',
    });

    this.background.animation = new AnimationFrame(2, () => this.draw());
    this.background.animation.start();
  }

  tick() {
    this.background.draw();
    this.background.nextFrame();
  }

  draw() {}
}
