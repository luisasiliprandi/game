class paperAgenda {
  image;
  x;
  y;
  SpeedX = 1;
  SpeedY = 1;
  scale = 0.4;

  constructor(theX, theY, speedX, speedY) {
    console.log(theX, theY);

    this.x = theX;
    this.y = theY;

    if (speedX !== undefined) {
      this.SpeedX = speedX;
    }
    if (speedY !== undefined) {
      this.SpeedY = speedY;
    }

    this.loadImages();
  }

  loadImages() {
    this.image = new Image();

    this.image.onload = () => {
      this.draw();
    };
    this.image.src = './assets/img/paper-agenda.png';
  }

  draw() {
    ctx.beginPath();
    // drawImage(image, dx, dy, dWidth, dHeight);
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      161 * this.scale,
      221 * this.scale
    );
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  tick() {
    this.move();
    this.draw();
  }
}
