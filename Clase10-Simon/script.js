const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start-button');
const simon = document.querySelector('#simon');
const cpuPlayer = document.querySelector('#cpu-turn');
const humanPlayer = document.querySelector('#player-turn');

startButton.addEventListener('click', () => {
  /*   const hiddeButton = startButton.classList.add('hidden'); */

  setTimeout(() => {
    cpuTurn(colors);
  }, 1000);

  setTimeout(() => {
    playerTurn();
  }, 2000);

  /*   setTimeout(() => {
    checkColors(cpuTurn(colors), playerTurn());
  }, 3000); */
});

function cpuTurn(colors) {
  console.log('inicio');
  const chooseRandomColor = Math.floor(Math.random() * 4);

  const randomColor = colors[chooseRandomColor];
  randomColor.classList.remove('opacity');
  cpuPlayer.classList.remove('opacity');

  setTimeout(function () {
    randomColor.classList.add('opacity');
    cpuPlayer.classList.add('opacity');
    console.log('fin');
    const cpuColor = randomColor.id;
    console.log(cpuColor);
    return cpuColor;
  }, 1500);
}

function checkColors(cpuColor, playerColor) {
  if (cpuColor === playerColor) {
    console.log('SIIIIIII');
  } else {
    console.log('NO');
  }
}

function obtenerColor(e) {
  const color = e.target.id;
  console.log(color);
  return color;
}

function playerTurn() {
  simon.addEventListener('click', obtenerColor);
}
