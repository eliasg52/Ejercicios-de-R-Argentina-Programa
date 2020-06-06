const $botonCalcularTiempo = document.querySelector('#calcular-tiempo-total');
const $horasVideo = document.querySelectorAll('.horas-video');
const $minutosVideo = document.querySelectorAll('.minutos-video');
const $segundosVideo = document.querySelectorAll('.segundos-video');
const $resultadoTiempo = document.querySelector('#resultado-calcular-tiempo')

$botonCalcularTiempo.onclick = function(){
	let horasSumaTotal = 0;
	for(let i = 0; i < $horasVideo.length; i++){
		horasSumaTotal = horasSumaTotal + horasVideo[i].value;
		$horasVideo.innerText = $resultadoTiempo;
	}

	// $horasVideo.innerText = $resultadoTiempo;
/*

	/*const $listaHoras = document.querySelectorAll('.horas-video');
	let horasVideo = 0;
	for (let i = 0; i < $listaHoras.length; i++) {
    	horasVideo = horasVideo + listaHoras[i].value;
	}

	$listaHoras.innerText = $resultadoTiempo;

	;*/


}