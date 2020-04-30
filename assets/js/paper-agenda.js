class PaperAgenda {
  image;
  x = 0;
  y = 0;
  speedX = 1;
  speedY = 1;
  scale = 0.5;

  constructor(theX, theY, speedX, speedY) {
    console.log(theX, theY);

    this.x = theX ?? this.x;
    this.y = theY ?? this.y;

    this.speedX = speedX ?? this.speedX;
    this.speedY = speedY ?? this.speedY;

    this._loadImages();
  }

  _loadImages() {
    this.image = new Image();

    this.image.onload = () => {
      this._draw();
    };
    this.image.src = './assets/img/paper-agenda.png';
  }

  _draw() {
    //console.info(`PaperAgenda: _draw`);
    // ctx.beginPath();
    // drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      81 * this.scale,
      111 * this.scale
    );
  }

  _move() {
    //console.info(`PaperAgenda: _move`);
    this.x += this.speedX;
    this.y += this.speedY;
  }

  tick() {
    //console.info(`PaperAgenda: tick`);
    this._draw();
    //this._move();
  }
}
