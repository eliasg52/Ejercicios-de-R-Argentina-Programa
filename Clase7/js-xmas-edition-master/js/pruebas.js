function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'Este campo debe tener al menos 1 caracter',
    'Validar nombre no funciono con un string vacio'
  );

  console.assert(
    validarNombre('1111111111111111111111111') ===
      'Este campo debe tener menos de 10 caracteres',
    'Validar nombre no valido que el nombre sea menor a 10 caracteres'
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('') === 'Debes seleccionar una ciudad',
    'Validar ciudad no valido que se haya seleccionado una opcion'
  );
}

function probarValidarRegalo() {
  console.assert(
    validarDescripcionRegalo('') === 'No se completo la descripcion del regalo',
    'Validar descripcion regalo no funciono con un string vacio'
  );

  console.assert(
    validarDescripcionRegalo(
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    ) === 'Este campo debe tener menos de 150 caracteres',
    'Validar descripcion regalo no valido que la descripcion sea menor a 150 caracteres'
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
