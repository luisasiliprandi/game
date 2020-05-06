let isGameOver = false;
let isGameWin = false;

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

setInterval(isKeyPressed, 1);
let isWPressed = false;

function isKeyPressed() {
  if (key.isDown(key.UP)) {
    isWPressed = true;
  }
}
if (key.isDown(key.UP)) {
  isSpacePressed = true;
}
