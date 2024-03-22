const maze = document.getElementById('maze');
const resetButton = document.getElementById('reset');

// Define the maze layout
const layout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

// Define player position and exit position
let playerX = 1;
let playerY = 1;
const exitX = 18;
const exitY = 18;

// Create maze cells
for (let y = 0; y < layout.length; y++) {
  for (let x = 0; x < layout[y].length; x++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    if (layout[y][x] === 1) {
      cell.style.backgroundColor = 'black';
    }
    cell.style.left = `${x * 20}px`;
    cell.style.top = `${y * 20}px`;
    maze.appendChild(cell);
  }
}

// Create player
const player = document.createElement('div');
player.classList.add('player');
player.style.left = `${playerX * 20}px`;
player.style.top = `${playerY * 20}px`;
maze.appendChild(player);

// Create exit
const exit = document.createElement('div');
exit.classList.add('exit');
exit.style.left = `${exitX * 20}px`;
exit.style.top = `${exitY * 20}px`;
maze.appendChild(exit);

// Move player
document.addEventListener('keydown', (event) => {
  const key = event.key;
  let newX = playerX;
  let newY = playerY;

  switch (key) {
    case 'ArrowUp':
      newY--;
      break;
    case 'ArrowDown':
      newY++;
      break;
    case 'ArrowLeft':
      newX--;
      break;
    case 'ArrowRight':
      newX++;
      break;
  }

  if (layout[newY][newX] !== 1) {
    playerX = newX;
    playerY = newY;
    player.style.left = `${playerX * 20}px`;
    player.style.top = `${playerY * 20}px`;
  }

  if (playerX === exitX && playerY === exitY) {
    alert('You win!');
  }
});

// Reset game
resetButton.addEventListener('click', () => {
  playerX = 1;
  playerY = 1;
  player.style.left = `${playerX * 20}px`;
  player.style.top = `${playerY * 20}px`;
});