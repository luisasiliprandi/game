class Background {
  image;

  constructor() {
    this.image = new Sprite({
      x: 0,
      y: 0,
      frameCount: 10,
      src: './assets/img/background.png',
    });

    this.image.animation = new AnimationFrame(7, () => {
      this.image.nextFrame();
    });

    this.image.animation.start();
  }

  tick() {
    this.image.draw();
  }

  _draw() {}
}
