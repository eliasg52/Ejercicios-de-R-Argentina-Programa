const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start-button');
const simon = document.querySelector('#simon');
const cpuPlayer = document.querySelector('#cpu-turn');
const humanPlayer = document.querySelector('#player-turn');
let cpuColors = [];
let cpuColorsEl = [];
let colorsPlayer;
let round = 0;
let time = 2500;

startButton.addEventListener('click', () => {
  /*   const hiddeButton = startButton.classList.add('hidden');  OCULTAR EL BOTON EMPEZAR AL INICIO DEL JUEGO*/
  /*   setTimeout(() => { */
  /* }, 2000);
   */
  startGame();
});

function startGame() {
  setTimeout(() => {
    cpuTurn(colors);
  }, 1000),
    setTimeout(() => {
      humanPlayer.classList.remove('opacity');
      playerTurn();
    }, time);
}

function cpuTurn(colors) {
  /*   console.log(time);
  console.log(cpuColors); */

  const random = getRandomColor(colors);
  /*   console.log(random); */
  const cpuColor = random.id;
  cpuColors.push(cpuColor);
  cpuColorsEl.push(random);

  for (let i = 0; i < cpuColorsEl.length; i++) {
    setTimeout(function () {
      removeOpacity(cpuColorsEl[i], cpuPlayer);
      addOpacity(cpuColorsEl[i], cpuPlayer);
    }, i * 1500);
  }
  time += 1500;
}

function getRandomColor(colors) {
  const chooseRandomColor = Math.floor(Math.random() * 4);
  const randomColor = colors[chooseRandomColor];
  return randomColor;
}

function removeOpacity(color, player) {
  color.classList.remove('opacity');
  player.classList.remove('opacity');
  /*   console.log(player); */
}

function addOpacity(color, player) {
  setTimeout(() => {
    color.classList.add('opacity');
    player.classList.add('opacity');
  }, 1000);
}

function checkColors(cpuColor, playerColor, round) {
  console.log(cpuColor, playerColor, round);
  if (cpuColor[round] === playerColor) {
    console.log('correcto');
    player;
    startGame();
  } else {
    console.log('Perdiste');
  }
}
/* startGame(); */
function getColor(e) {
  const color = e.target.id;
  const divColor = e.target;
  console.log(color);
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
