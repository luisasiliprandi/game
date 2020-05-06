class PaperAgenda {
  // Public
  x = 0;
  y = 0;
  width = 81;
  height = 111;

  // Private
  _image;
  _speedX = 1;
  _speedY = 1;
  _scale = 0.5;

  constructor(theX, theY, speedX, speedY) {
    //console.log(theX, theY);

    this.x = theX ?? this.x;
    this.y = theY ?? this.y;

    this._speedX = speedX ?? this._speedX;
    this._speedY = speedY ?? this._speedY;

    this._loadImages();
  }

  _loadImages() {
    this._image = new Image();

    this._image.onload = () => {
      this._draw();
    };
    this._image.src = './assets/img/paper-agenda.png';
  }

  _draw() {
    //console.info(`PaperAgenda: _draw`);
    // ctx.beginPath();
    // drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      this._image,
      this.x,
      this.y,
      this.width * this._scale,
      this.height * this._scale
    );
  }

  _move() {
    //console.info(`PaperAgenda: _move`);
    this.x += this._speedX;
    this.y += this._speedY;
  }

  tick() {
    //console.info(`PaperAgenda: tick`);
    this._draw();
    // this._move();
  }
}
