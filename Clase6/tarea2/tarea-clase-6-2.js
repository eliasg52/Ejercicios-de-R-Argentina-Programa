/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

//ACCIONES DEL BOTON AGREGAR INTEGRANTES/AGREGAR SUELDO/QUITAR SUELDO
document.querySelector('#agregar-integrantes').onclick = function (event) {
  event.preventDefault();
  const $integrantes = document.querySelector('#cantidad-integrantes');
  const nombreIntegrante = $integrantes.value.trim();

  if (nombreIntegrante === '') {
    alert('Introduce un valor');
  } else {
    crearIntegranteLabel(nombreIntegrante);
  }

  crearIntegranteBotones(nombreIntegrante);
  clickAgregarSueldo(nombreIntegrante);
  clickQuitarSueldo(nombreIntegrante);
};

function crearIntegranteLabel(nombreIntegrante) {
  const $div = document.createElement('div');
  const $label = document.createElement('label');
  $label.textContent = nombreIntegrante;

  $div.id = nombreIntegrante;
  $div.className = 'integrante color-blanco';
  $div.appendChild($label);

  const $divIntegrantes = document.querySelector('#integrantes');
  $divIntegrantes.appendChild($div);
}

function crearIntegranteBotones(nombreIntegrante) {
  document.querySelector('#boton-calcular').classList.remove('oculto');
  const $botonAgregar = document.createElement('button');
  const $botonQuitar = document.createElement('button');

  $botonAgregar.className = 'boton-agregar';
  $botonQuitar.className = 'boton-quitar';

  $botonAgregar.textContent = 'Agregar Sueldo';
  $botonQuitar.textContent = 'Quitar';

  $botonAgregar.type = 'submit';
  $botonQuitar.type = 'submit';

  $botonAgregar.id = `boton-${nombreIntegrante}-agregar`;
  $botonQuitar.id = `boton-${nombreIntegrante}-quitar`;

  const $div = document.querySelector('#' + nombreIntegrante);
  $div.appendChild($botonAgregar);
  $div.appendChild($botonQuitar);
  const $divIntegrantes = document.querySelector('#integrantes');
  $divIntegrantes.appendChild($div);
}

function clickAgregarSueldo(nombreIntegrante) {
  document.querySelector(
    '#boton-' + nombreIntegrante + '-agregar'
  ).onclick = function (event) {
    event.preventDefault();
    agregarInputSueldo(nombreIntegrante);
  };
}

function clickQuitarSueldo(nombreIntegrante) {
  document.querySelector(
    '#boton-' + nombreIntegrante + '-quitar'
  ).onclick = function (event) {
    event.preventDefault();
    quitarInputSueldo(nombreIntegrante);
  };
}

function agregarInputSueldo(nombreIntegrante) {
  const $input = document.createElement('input');
  $input.placeholder = 'Ingresar Sueldo anual';
  $input.type = 'number';
  $input.id = `input-${nombreIntegrante}`;
  $input.className = 'sueldo-anual';

  const $div = document.querySelector('#' + nombreIntegrante);
  $div.appendChild($input);
}

function quitarInputSueldo(nombreIntegrante) {
  const $div = document.querySelector('#' + nombreIntegrante);
  const $input = document.querySelector('#input-' + nombreIntegrante);
  $div.removeChild($input);
}

//ACCIONES DEL BOTON CALCULAR
document.querySelector('#boton-calcular').onclick = function () {
  const $inputSueldos = [...document.querySelectorAll('.sueldo-anual')];
  const inputSueldosNumeros = [];

  for (let i = 0; i < $inputSueldos.length; i++) {
    // Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0)
    if ($inputSueldos[i].value === '') {
      $inputSueldos.splice($inputSueldos[i].value, 1);
    } else {
      inputSueldosNumeros.push(Number($inputSueldos[i].value));
    }
  }

  mostrarSueldos(
    calcularMayorSueldo(inputSueldosNumeros),
    calcularMenorSueldo(inputSueldosNumeros),
    calcularPromedioSueldosAnual(inputSueldosNumeros),
    calcularPromedioSueldosMensual(inputSueldosNumeros)
  );
};

//CALCULOS

function calcularMayorSueldo(sueldoAnual) {
  let sueldoMayor = sueldoAnual[0];
  for (let i = 1; i < sueldoAnual.length; i++) {
    if (sueldoAnual[i] > sueldoMayor) {
      sueldoMayor = sueldoAnual[i];
    }
  }

  return sueldoMayor;
}

function calcularMenorSueldo(sueldoAnual) {
  let sueldoMenor = sueldoAnual[0];
  for (let i = 1; i < sueldoAnual.length; i++) {
    if (sueldoAnual[i] < sueldoMenor) {
      sueldoMenor = sueldoAnual[i];
    }
  }

  return sueldoMenor;
}

function calcularPromedioSueldosAnual(sueldoAnual) {
  let suma = 0;
  for (sueldo of sueldoAnual) {
    suma = suma + sueldo;
  }
  return suma / sueldoAnual.length;
}

function calcularPromedioSueldosMensual(sueldoAnual) {
  let suma = 0;
  for (sueldo of sueldoAnual) {
    suma = suma + sueldo / 12;
  }

  return suma / sueldoAnual.length;
}

function mostrarSueldos(
  mayorSueldo,
  menorSueldo,
  promedioSueldosAnual,
  promedioSueldosMensual
) {
  document.querySelector('#analisis').classList.remove('oculto');
  document.querySelector('#mayor-sueldo').textContent = mayorSueldo;
  document.querySelector('#menor-sueldo').textContent = menorSueldo;
  document.querySelector('#promedio-anual').textContent = promedioSueldosAnual;
  document.querySelector(
    '#promedio-mensual'
  ).textContent = promedioSueldosMensual;
}
