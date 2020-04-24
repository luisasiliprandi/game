//    Practice Week-10
// const canvas = document.querySelector('.game');
// const ctx = canvas.getContext('2d');

// function tick() {
//   console.log('tick');

//   window.requestAnimationFrame(tick);
// }

// tick();

const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');

let walkingSprite;
let paperAgenda1 = new paperAgenda(500, 500);

function init() {
  walkingSprite = new Sprite({
    x: 0,
    y: 0,
    frameCount: 3,
    src: './assets/img/estela.png',
  });

  walkingSprite.animation = new AnimationFrame(8, () => draw());
  walkingSprite.animation.start();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Position
  walkingSprite.x = (canvas.width - walkingSprite.width) / 10;
  walkingSprite.y = (canvas.height - walkingSprite.height) / 1.5;

  walkingSprite.draw();
  walkingSprite.nextFrame();

  paperAgenda1.draw();
}

init();
