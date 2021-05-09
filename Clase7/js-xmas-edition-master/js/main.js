const $form = document.querySelector('#carta-a-santa');

elementos = [];
const nombre = $form.nombre.value;
elementos.push(nombre);
const ciudad = $form.ciudad.value;
elementos.push(ciudad);
const comportamiento = $form.comportamiento.value;
elementos.push(comportamiento);
const descripcionRegalo = $form['descripcion-regalo'].value;
elementos.push(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Introduce un nombre valido';
  }

  let caracteresMaximos = 10;
  if (nombre.length >= caracteresMaximos) {
    return 'Demasiados caracteres';
  }
}

function validarCaracteresVacios(elemento) {
  if (elemento.length === 0) {
    console.log('introduce un valor');
  }
}

function validarCaracteresFunciones() {
  for (elemento of elementos) {
    validarCaracteresVacios(elemento);
  }
}

recorrerElementos();
