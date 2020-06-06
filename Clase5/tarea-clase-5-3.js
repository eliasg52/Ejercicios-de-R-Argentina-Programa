const $botonCalcularTiempo = document.querySelector('#calcular-tiempo-total');
const $horasVideo = document.querySelectorAll('.horas-video');
const $minutosVideo = document.querySelectorAll('.minutos-video');
const $segundosVideo = document.querySelectorAll('.segundos-video');
const $resultadoTiempo = document.querySelector('#resultado-calcular-tiempo')

$botonCalcularTiempo.onclick = function(){

	let horasSumaTotal = 0;
	for(let i = 0; i < $horasVideo.length; i++){
		horasSumaTotal = horasSumaTotal + Number($horasVideo[i].value);
	}

	let minutosSumaTotal = 0;
	for(let i = 0; i < $minutosVideo.length; i++){
		minutosSumaTotal = minutosSumaTotal + Number($minutosVideo[i].value);
	}

	let segundosSumaTotal = 0;
	for(let i = 0; i < $segundosVideo.length; i++){
		segundosSumaTotal = segundosSumaTotal + Number($segundosVideo[i].value);
	}
	
	$resultadoTiempo.innerText = `El Tiempo total de las clases es ${horasSumaTotal}hs ${minutosSumaTotal}min ${segundosSumaTotal}sec.` 
}
