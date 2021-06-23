const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start-button');
const simon = document.querySelector('#simon');
const cpuPlayer = document.querySelector('#cpu-turn');
const humanPlayer = document.querySelector('#player-turn');
let cpuColors = [];
let colorPlayer;
let round = 0;

startButton.addEventListener('click', () => {
  /*   const hiddeButton = startButton.classList.add('hidden');  OCULTAR EL BOTON EMPEZAR AL INICIO DEL JUEGO*/
  /*   setTimeout(() => { */
  /* }, 2000);
   */
  console.log(round);
  startGame();
});

function startGame() {
  setTimeout(() => {
    cpuTurn(colors, round);
  }, 1000),
    setTimeout(() => {
      humanPlayer.classList.remove('opacity');
      playerTurn();
    }, 3000);
  /* setTimeout(() => {
      roundIncrementer(round);
    }); */
}

function cpuTurn(colors, round) {
  console.log(round);
  /* incrementRound(round); */
  const random = getRandomColor(colors);
  removeOpacity(random, cpuPlayer);
  addOpacity(random, cpuPlayer);

  const cpuColor = random.id;
  console.log(cpuColor);
  cpuColors.push(cpuColor);
}

function getRandomColor(colors) {
  const chooseRandomColor = Math.floor(Math.random() * 4);
  const randomColor = colors[chooseRandomColor];
  return randomColor;
}

function removeOpacity(color, player) {
  color.classList.remove('opacity');
  console.log(color);
  player.classList.remove('opacity');
  console.log(player);
}

function addOpacity(color, player) {
  setTimeout(() => {
    color.classList.add('opacity');
    player.classList.add('opacity');
  }, 1200);
}

function checkColors(cpuColor, playerColor, round) {
  if (cpuColor[round] === playerColor) {
    startGame();
  } else {
    console.log('Perdiste');
  }
}

function incrementRound(round) {
  round++;
  /*  round = round + 1; */
  return round;
}

function getColor(e) {
  const color = e.target.id;
  const divColor = e.target;
  console.log(color);
  console.log(cpuColors);
  removeOpacity(divColor, humanPlayer);
  addOpacity(divColor, humanPlayer);
  colorPlayer = color;
  setTimeout(() => {
    checkColors(cpuColors, colorPlayer, round);
    round++;
  }, 1000);
}

function playerTurn() {
  simon.addEventListener('click', getColor);
}
