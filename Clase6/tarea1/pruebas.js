function pruebaValidarEdades() {
  console.assert(
    validarEdades('') === 'Este campo debe tener al menos 1 caracter',
    'Validar edades no valido que la edad no sea vacia'
  );

  console.assert(
    validarEdades('/.-$#^,') === 'El campo edades solo puede tener numeros',
    'Validar edades no valido que solo se ingresaran numeros'
  );

  console.assert(
    validarEdades('160') === 'Ingrese una edad valida entre 1 y 150 años',
    'Validar edades no valido que se ingrese una edad entre 1 y 150 años'
  );

  console.assert(
    validarEdades('55') === '',
    'Validar edades no funciono con un numero valido'
  );
}

pruebaValidarEdades();
