const $botonIngresar = document.querySelector('#ingresar');
const $tituloBienvenida = document.querySelector('#titulo-bienvenida');

$botonIngresar.onclick = function(){
	const nombreDeUsuario = document.querySelector('#nombre-usuario').value;
	const segundoNombreDeUsuario = document.querySelector('#snombre-usuario').value;
	const apellidoDeUsuario = document.querySelector('#apellido-usuario').value;
	const edadDeUsuario = document.querySelector('#edad-usuario').value;
	let mostrarInformacionUsuario;
	mostrarInformacionUsuario = `${nombreDeUsuario} ${segundoNombreDeUsuario} ${apellidoDeUsuario}, ${edadDeUsuario} años`;

	$tituloBienvenida.insertAdjacentText("beforeend", nombreDeUsuario);  //Agrega el nombre de usuario al "Bienvenido" en la pag.

	/*
	1.Traigo el div con id=resultado para su manipulacion
	2.Creo un nuevo input y le agrego sus atributos
	3.Le agrego valor al input los cuales son los agregados anteriormente
	por el usuario y gurdardados en la variable monstrarInformacionUsuario
	4.Integro el input al DIV el cual se agrega con el valor especificado
	*/
	const $divResultado = document.querySelector('#resultado');
	const nuevoInput = document.createElement('INPUT');
	nuevoInput.setAttribute("type", "text");
	nuevoInput.setAttribute("size", "25");				
	nuevoInput.value = mostrarInformacionUsuario;
	$divResultado.appendChild(nuevoInput);
}