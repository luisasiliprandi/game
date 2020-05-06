function isCollided(player, paperAgenda) {
  if (
    player.x < paperAgenda.x + paperAgenda.width &&
    player.x + player.width > paperAgenda.x &&
    player.y < paperAgenda.y + paperAgenda.height &&
    player.y + player.height > paperAgenda.y
  ) {
    return true;
  }

  return false;
}

function updateLivesHTML() {
  const $lives = document.querySelector('.num-lives');

  $lives.style.width = `${15 * playerLives}px`;
}

function updateScoreHTML() {
  const $score = document.querySelector('.score');

  $score.innerText = score;
}
