/* function sumar(a, b) {
  return a + b;
}

console.assert(sumar(1, 2) === 3, 'La suma de 1 + 2 no dio 3'); */
function probarValidarNombre() {
  console.assert(
    validarNombre(''),
    'Este campo debe tener al menos 1 caracter',
    'Validar nombre no valido que el nombre no sea vacio'
  );

  console.assert(
    validarNombre('1111111111111111111111111'),
    'Este campo debe tener menos de 10 caracteres',
    'Validar nombre no valido que el nombre sea menor a 10 caracteres'
  );
}

probarValidarNombre();

function probarValidarElementos() {
  console.assert(
    validarCaracteresVacios(''),
    'Este campo debe tener al menos 1 caracter'
  );
}
