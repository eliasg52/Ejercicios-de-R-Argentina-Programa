function validarNombre(nombre) {
  let caracteresMaximos = 10;
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  } else if (nombre.length >= caracteresMaximos) {
    return 'Este campo debe tener menos de 10 caracteres';
  } else if (!/^[a-z]+$/i.test(nombre)) {
    return 'El campo nombre solo acepta letras';
  } else {
    return '';
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'No se selecciono ninguna ciudad';
  } else {
    return '';
  }
}

function validarDescripcionRegalo(descripcionRegalo) {
  let caracteresMaximos = 150;
  if (descripcionRegalo.length === 0) {
    return 'No se completo la descripcion del regalo';
  } else if (descripcionRegalo.length >= caracteresMaximos) {
    return 'Este campo debe tener menos de 150 caracteres';
  } else if (!/^[a-z0-9]+$/.test(descripcionRegalo)) {
    return 'El campo descripcion solo puede tener letras y numeros';
  } else {
    return '';
  }
}

function validarFormulario(event) {
  const $form = document.querySelector('#carta-a-santa');
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    document.querySelector('#exito').className = '';
    $form.className = 'oculto';

    redirigirUsuario();
  }

  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errores = document.querySelector('#errores');
  let cantidadErrores = 0;

  eliminarElementos();
  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = 'error';

      const $error = document.createElement('li');
      $error.innerText = error;

      $errores.appendChild($error);
    } else {
      $form[key].className = '';
    }
  });

  return cantidadErrores;

  /*   errorNombre = errores.nombre;
  errorCiudad = errores.ciudad;
  errorDescripcionRegalo = errores.descripcionRegalo;

  if (errorNombre) {
    $form.nombre.className = 'error';
  } else {
    $form.nombre.className = '';
  }

  if (errorCiudad) {
    $form.ciudad.className = 'error';                       FUNCION SIN REFACTORIZAR
  } else {
    $form.ciudad.className = '';
  }

  if (errorDescripcionRegalo) {
    $form['descripcion-regalo'].className = 'error';
  } else {
    $form['descripcion-regalo'].className = '';
  } */
}

function eliminarElementos() {
  const elementosErrores = document.querySelectorAll('#errores li');
  elementosErrores.forEach(function (elemento) {
    elemento.remove();
  });
}

function redirigirUsuario() {
  setTimeout(function () {
    location.href = 'wishlist.html';
  }, 5000);
}

const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;
