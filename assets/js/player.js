class Player {
  // function init same?

  // function init() {
  //   walkingSprite = new Sprite({
  //     x: 0,
  //     y: 0,
  //     frameCount: 3,
  //     src: './assets/img/estela.png',
  //   });

  constructor() {
    this.player = new Sprite({
      x: 0,
      y: 0,
      frameCount: 3,
      src: './assets/img/estela.png',
    });

    //velocity change code
    this.player.animation = new AnimationFrame(8, () => this.draw());
    this.player.animation.start();

    //  new velocity change code
    // const animation = new AnimationFrame(4, () => tick());

    // function update() {
    // do something
    // }
  }

  tick() {
    this.player.draw();
    this.player.nextFrame();
  }

  draw() {}
}
