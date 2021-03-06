const $botonCalcularTiempo = document.querySelector('#calcular-tiempo-total');
const $botonLimpiar = document.querySelector('#borrar-contenido');
let $horasVideo = document.querySelectorAll('.horas-video');
const $minutosVideo = document.querySelectorAll('.minutos-video');
const $segundosVideo = document.querySelectorAll('.segundos-video');
const $resultadoTiempo = document.querySelector('#resultado-calcular-tiempo');

$botonCalcularTiempo.onclick = function () {
  function sumarTiempo($elementohtml) {
    let tiempoSumaTotal = 0;
    for (let i = 0; i < $elementohtml.length; i++) {
      tiempoSumaTotal = tiempoSumaTotal + Number($horasVideo[i].value);
    }
  }
  let horasSumaTotal = 0;
  for (let i = 0; i < $horasVideo.length; i++) {
    horasSumaTotal = horasSumaTotal + Number($horasVideo[i].value);
  }

  let minutosSumaTotal = 0;
  for (let i = 0; i < $minutosVideo.length; i++) {
    minutosSumaTotal = minutosSumaTotal + Number($minutosVideo[i].value);
  }

  let segundosSumaTotal = 0;
  for (let i = 0; i < $segundosVideo.length; i++) {
    segundosSumaTotal = segundosSumaTotal + Number($segundosVideo[i].value);
  }

  $resultadoTiempo.innerText = `El Tiempo total de las clases es ${horasSumaTotal}hs ${minutosSumaTotal}min ${segundosSumaTotal}sec.`;
};

$botonLimpiar.onclick = function () {
  if ($resultadoTiempo !== '' && $horasVideo !== '') {
    $resultadoTiempo.innerText = '';
  }
};
