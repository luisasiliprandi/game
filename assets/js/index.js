const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const random = new Random.Random();

const bg = new Background();
const player = new Player();

let playerLives = 3;
let score = 0;
let isGameOver = false;
let isGameWin = false;

let scorePID;

function endGame() {
  isGameOver = true;
  clearInterval(scorePID);
  console.info(score);
}

function updateLives() {
  // detecting contact between the player and the paperAgenda
  if (isCollided(player.sprite, paperAgendas[0]) == true) {
    if (playerLives > 0) {
      playerLives -= 1;
    } else {
      //game end
      endGame();
    }

    updateLivesHTML();
  }
}

function updateScore() {
  // when the game doesn't end
  scorePID = setInterval(() => {
    score++;
    updateScoreHTML();
  }, 1000);
}

// function updateTime() {
//   ++score;
// }
// Output the result
// document.getElementById('score').innerHTML;

// Create multiple paper agendas
const paperAgendas = [];
paperAgendas.push(new PaperAgenda(random.integer(1, 500), 160));

paperAgendas.push(new PaperAgenda(150, 160));
paperAgendas.push(new PaperAgenda(250, 160));
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

  updateLives();

  if (isGameOver === false) {
    window.requestAnimationFrame(tick);
  }
}
tick();
updateScore();

function onKeyDown(event) {
  const key = event.key.toLowerCase();

  console.log(`"${key}" was pressed.`);

  if (key === 'space' || key === 'w') {
    player.jump();
  }
}

document.addEventListener('keydown', onKeyDown);

// End Game

// if (isGameOver == true) {
//   gameFail();
// } else if (isGameWin == true) {
//   gameSuccess();
// } else {
//   window.requestAnimationFrame(this.tick.bind(this));
// }
