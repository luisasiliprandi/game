const canvas = document.querySelector('.world');
const ctx = canvas.getContext('2d');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-button');
const restartContent = document.getElementById('restart');
const restartBtn = document.getElementById('restart-button');
const random = new Random.Random();

const bg = new Background();
const player = new Player();

// audios from freesound.org
const backgroundAudio = new Sound('assets/sound/background.mp3');

//start game
startBtn.onclick = function () {
  backgroundAudio.play();
  startScreen.style.display = 'none';
  tick();
  backgroundAudio.play();
  backgroundAudio.loop = true;

  console.log(backgroundAudio.loop);
};

const dieAudio = new Sound('assets/sound/die.mp3');

//player starts with 3 lives and score = 0
let playerLives = 3;
let score = 0;

let isGameOver = false;
let isGameWin = false;
let scorePID;

function endGame() {
  isGameOver = true;
  clearInterval(scorePID);
  console.info(score);
  // //display Message
  // displayMessage(
  //   `Oops, game ended! Next time watch out for the paper agendas! `,
  //   110,
  //   canvas.width,
  //   canvas.height,
  //   `white`
  // );
  // displayMessage(
  //   `your score: ${score}`,
  //   30,
  //   canvas.width,
  //   canvas.height,
  //   `#404040`
  // );

  // stop audio when game ends
  backgroundAudio.pause();
}

// updates lives after player colliding with paperAgenda
function updateLives() {
  // detecting contact between the player and the paperAgenda
  if (isCollided(player._spriteRun, paperAgendas[0]) == true) {
    paperAgendas.splice(0, 1);
    if (playerLives > 0) {
      playerLives -= 1;
    } else {
      // when game ends, plays die audio
      endGame();
      dieAudio.play();
    }

    updateLivesHTML();
  }
}

function updateScore() {
  // when the game doesn't end updates score according to milliseconds
  scorePID = setInterval(() => {
    score++;
    updateScoreHTML();
  }, 400);
}

const paperAgendas = [];

let paperAgendaCounter = 0;

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //create multiple paper agendas each x ticks

  if (paperAgendaCounter % 80 == 0) {
    paperAgendas.push(new PaperAgenda(random.integer(600, 900), 205));
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

  // press SPACE or W to jump
  if (key === ' ' || key === 'w') {
    player.jump();
  }
}

document.addEventListener('keydown', onKeyDown);
