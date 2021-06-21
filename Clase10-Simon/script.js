const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start-button');
const simon = document.querySelector('#simon');
const cpuPlayer = document.querySelector('#cpu-turn');
const humanPlayer = document.querySelector('#player-turn');
let coloorCPU;
let colorPlayer;

startButton.addEventListener('click', () => {
  /*   const hiddeButton = startButton.classList.add('hidden');  OCULTAR EL BOTON EMPEZAR AL INICIO DEL JUEGO*/
  /*   setTimeout(() => { */
  /* }, 2000);
   */
  setTimeout(() => {
    cpuTurn(colors);
  }, 1000);

  playerTurn();

  /*   setTimeout((colorCPU) => {
    console.log(coloorPlayer);
    console.log(colorCPU);
    checkColors(coloorCPU, colorPlayer);
  }, 5000);
    setTimeout(() => {
    checkColors(cpuTurn(colors), playerTurn());
  }, 3000); */
});

function cpuTurn(colors) {
  const chooseRandomColor = Math.floor(Math.random() * 4);
  const randomColor = colors[chooseRandomColor];

  removeOpacity(randomColor, cpuPlayer);
  addOpacity(randomColor, cpuPlayer);

  const cpuColor = randomColor.id;
  console.log(cpuColor);
  coloorCPU = cpuColor;
}

function removeOpacity(color, player) {
  color.classList.remove('opacity');
  player.classList.remove('opacity');
}

function addOpacity(color, player) {
  setTimeout(() => {
    color.classList.add('opacity');
    player.classList.add('opacity');
  }, 1200);
}

function checkColors(cpuColor, playerColor) {
  if (cpuColor === playerColor) {
    console.log('SIIIIIII');
  } else {
    console.log('NO');
  }
}

function obtainColor(e) {
  const color = e.target.id;
  const divColor = e.target;
  console.log(color);
  console.log(coloorCPU);
  removeOpacity(divColor, humanPlayer);
  addOpacity(divColor, humanPlayer);
  colorPlayer = color;
  /*   setTimeout(() => {
    checkColors(coloorCPU, colorPlayer);
  }, 5000); */
}

function playerTurn() {
  simon.addEventListener('click', obtainColor);
  setTimeout(() => {
    checkColors(coloorCPU, colorPlayer);
  }, 5000);
}
