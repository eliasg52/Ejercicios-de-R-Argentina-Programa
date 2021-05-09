const $form = document.querySelector('#carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }

  let caracteresMaximos = 10;
  if (nombre.length >= caracteresMaximos) {
    return 'Este campo debe tener menos de 10 caracteres';
  }

  return '';
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'No se selecciono ninguna ciudad';
  }

  return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return 'No se completo la descripcion del regalo';
  }

  let caracteresMaximos = 150;
  if (descripcionRegalo.length >= caracteresMaximos) {
    return 'Este campo debe tener menos de 150 caracteres';
  }

  return '';
}
