class Player {
  // public
  sprite;

  // private
  _spriteRun;
  _spriteJump;

  constructor() {
    // running player
    this._spriteRun = new Sprite({
      x: 0,
      y: 0,
      frameCount: 3,
      src: './assets/img/estela.png',
    });

    // Set animation for running Sprite
    this._spriteRun.animation = new AnimationFrame(7, () => {
      this._spriteRun.nextFrame();
    });

    // jumping player
    this._spriteJump = new Sprite({
      x: 0,
      y: 0,
      frameCount: 4,
      src: './assets/img/jump.png',
    });

    // Set animation for running Sprite
    this._spriteJump.animation = new AnimationFrame(7, () => {
      this._spriteJump.nextFrame();
    });

    //this._spriteRun.animation.start();

    this.sprite = this._spriteRun;

    this.sprite.animation.start();
  }

  _switchAnimation(to) {
    // Stop the current animation
    this.sprite.animation.stop();

    // Point the new animation to sprite
    this.sprite = to;

    // Start the new animation
    this.sprite.animation.start();
  }

  tick() {
    this.sprite.draw();
  }

  jump() {
    this._switchAnimation(this._spriteJump);

    setTimeout(() => {
      this._switchAnimation(this._spriteRun);
    }, 500);
  }

  _draw() {}
}
