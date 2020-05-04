const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const random = new Random.Random();

const bg = new Background();
const player = new Player();
const key = new Key();

const playerLives = 3;
const score = 0;

function isCollided() {}

function updateLives() {
  // detecting contact between the player and the paperAgenda
  if (isCollided == true) {
    if (playerLives > 1) {
      playerLives -= 1;
    } else if (playerLives === 1) {
      //game end
    }
  }
}

function updateScore() {
  // when the game doesn't end
  setInterval(updateTime, 1000);
}

function updateTime() {
  ++score;
}
// Output the result
// document.getElementById('score').innerHTML;

// Create multiple paper agendas
const paperAgendas = [];
paperAgendas.push(new PaperAgenda(random.integer(1, 100), 160));
paperAgendas.push(new PaperAgenda(350, 160));
paperAgendas.push(new PaperAgenda(450, 160));
paperAgendas.push(new PaperAgenda(550, 160));

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bg.tick();
  player.tick();

  paperAgendas.forEach((pa) => {
    pa.tick();
  });

  window.requestAnimationFrame(tick);

  updateLives();
  updateScore();
}

tick();

window.addEventListener(
  'keyup',
  function (event) {
    key.onKeyup(event);
  },
  false
);

window.addEventListener(
  'keydown',
  function (event) {
    key.isDown(event);
  },
  false
);

// End Game

if (isGameOver == true) {
  gameFail();
} else if (isGameWin == true) {
  gameSuccess();
} else {
  window.requestAnimationFrame(this.tick.bind(this));
}
