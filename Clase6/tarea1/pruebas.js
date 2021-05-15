function pruebaValidarEdades() {
  console.assert(
    validarEdades('') === 'Este campo debe tener al menos 1 caracter',
    'Validar edades no valido que la edad no sea vacia'
  );
}

pruebaValidarEdades();
