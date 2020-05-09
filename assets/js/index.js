const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const random = new Random.Random();

const bg = new Background();
const player = new Player();

// audios from freesound.org
const backgroundAudio = new Sound('assets/sound/background.wav');

backgroundAudio.play();
backgroundAudio.loop = true;

console.log(backgroundAudio.loop);

const dieAudio = new Sound('assets/sound/die.mp3');

let playerLives = 3;
let score = 0;
let isGameOver = false;
let isGameWin = false;

let scorePID;

function endGame() {
  isGameOver = true;
  clearInterval(scorePID);
  console.info(score);

  // stop audio when game ends
  backgroundAudio.pause();
}

function updateLives() {
  // detecting contact between the player and the paperAgenda
  if (isCollided(player.sprite, paperAgendas[0]) == true) {
    paperAgendas.splice(0, 1);
    if (playerLives > 0) {
      playerLives -= 1;
    } else {
      //game end
      endGame();
      dieAudio.play();
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

//function newPaperAgenda() {

//}
//setInterval(createPaperAgenda(), 200);

//newPaperAgenda();

// paperAgendas.push(new PaperAgenda(150, 160));
// paperAgendas.push(new PaperAgenda(250, 160));
// paperAgendas.push(new PaperAgenda(350, 160));
// paperAgendas.push(new PaperAgenda(450, 160));
// paperAgendas.push(new PaperAgenda(550, 160));
// paperAgendas.push(new PaperAgenda(550, 160));

let paperAgendaCounter = 0;

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (paperAgendaCounter % 60 == 0) {
    paperAgendas.push(new PaperAgenda(random.integer(600, 900), 155));
  }

  paperAgendaCounter += 1;

  bg.tick();
  player.tick();

  paperAgendas.forEach((pa) => {
    pa.tick();
  });

  console.log(paperAgendas.length);

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
