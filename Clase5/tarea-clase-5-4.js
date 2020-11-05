const $listaNumeros = document.querySelectorAll('.numeros-lista');
const $primerTexto = document.querySelector('#primer-texto');


for(let i = 0; i < $listaNumeros.length; i++){
	let numerosLista = Number($listaNumeros[i].innerText);
	numerosLista = numerosLista+numerosLista;
	$primerTexto.innerText = numerosLista 


}