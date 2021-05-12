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

  console.assert(
    validarNombre('Elias') === '',
    'Validar nombre fallo con un nombre valido'
  );

  console.assert(
    validarNombre('123456') === 'El campo nombre solo acepta letras',
    'Validar nombre no valido que solo se ingresen letras'
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('') === 'No se selecciono ninguna ciudad',
    'Validar ciudad no valido que se haya seleccionado una opcion'
  );

  console.assert(
    validarCiudad('Buenos Aires') === '',
    'Validar nombre fallo con un nombre valido'
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

  console.assert(
    validarDescripcionRegalo('pelota') === '',
    'Validar descripcion regalo no funciono con una descripcion valida'
  );

  console.assert(
    validarDescripcionRegalo('@#$#@$%') ===
      'El campo descripcion solo puede tener letras y numeros',
    'Validar descripcion regalo no verifico que solo se ingresen letras y numeros'
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
