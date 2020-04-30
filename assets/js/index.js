const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const random = new Random.Random();

const bg = new Background();
const player = new Player();
const jp = new JumpingPlayer();

// Create multiple paper agendas
const paperAgendas = [];
paperAgendas.push(new PaperAgenda(random.integer(1, 100), 160));
paperAgendas.push(new PaperAgenda(350, 160));
paperAgendas.push(new PaperAgenda(450, 160));
paperAgendas.push(new PaperAgenda(550, 160));

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bg.tick();
  //jp.tick();
  player.tick();

  paperAgendas.forEach((pa) => {
    pa.tick();
  });

  window.requestAnimationFrame(tick);
}

tick();

//Use of add event listener for starting game?

// if (key == 'w'|| key === 'arrowup') {
// player.moveUp();
// }

// document.addEventListener('keyUp', onKeyUp);

// Old animation index
// const canvas = document.querySelector('.world');
// const ctx = canvas.getContext('2d');

// let walkingSprite;
// let paperAgenda1 = new paperAgenda(250, 160);

// function init() {
//   walkingSprite = new Sprite({
//     x: 0,
//     y: 0,
//     frameCount: 3,
//     src: './assets/img/estela.png',
//   });

//   walkingSprite.animation = new AnimationFrame(8, () => draw());
//   walkingSprite.animation.start();
// }

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Position
//   walkingSprite.x = (canvas.width - walkingSprite.width) / 10;
//   walkingSprite.y = (canvas.height - walkingSprite.height) / 0.15;

//   walkingSprite.draw();
//   walkingSprite.nextFrame();

//   paperAgenda1.draw();
// }

// init();
