const colors = document.querySelectorAll('.colors');
const startButton = document.querySelector('#start-button');
const simon = document.querySelector('#simon');

startButton.addEventListener('click', () => {
  /*   const hiddeButton = startButton.classList.add('hidden'); */
  cpuTurn(colors);
});

simon.addEventListener('click', (e) => {
  const playerColor = e.target.id;
  return playerColor;
});

if (cpuColor === 'red') {
  console.log('asd');
}

function start() {
  const cpuColor = cpuTurn(colors);

  /*   setTimeout(function () {
    console.log(playerColor);
  }, 2000); */

  /* setTimeout(playerTurn()), 3000; */
  /*   setTimeout(function () {
    checkColors(cpuColor, playerTurn());
  }),
    4000; */
  /*   checkColors(cpuColor, playerTurn()); */
}

function cpuTurn(colors) {
  const chooseRandomColor = Math.floor(Math.random() * 4);

  const randomColor = colors[chooseRandomColor];
  randomColor.classList.remove('opacity');

  setTimeout(function () {
    randomColor.classList.add('opacity');
  }, 1000);

  const cpuColor = randomColor.id;
  return cpuColor;
}

/* function playerTurn() {
  simon.addEventListener('click', obtenerColor);
} */

function checkColors(cpuColor, playerColor) {
  if (cpuColor === playerColor) {
    console.log('SI');
  } else {
    console.log('NO');
  }
}
/* 
function obtenerColor(eventoTarget) {
  
}

function consolear(asd) {
  const colorPlayer = asd;
  return colorPlayer;
} */

function obtenerColor(e) {
  const color = e.target.id;
  console.log(color);
  return color;
}

function playerTurn() {
  simon.addEventListener('click', obtenerColor);
}
