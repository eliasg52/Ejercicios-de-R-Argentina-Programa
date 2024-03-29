/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const familia = [];
const agruparFamiliares = () => {
  let integrante = prompt('Ingresa un integrante de tu familia');
  if (integrante === null || integrante === '') {
    alert('No ingresaste ningun integrante');
  } else if (!isNaN(integrante)) {
    alert('Ingrese un familiar valido');
  } else {
    familia.push(integrante);
  }

  let confirmacion = confirm('Quieres ingresar un integrante?');

  if (confirmacion) {
    agruparFamiliares();
  } else {
    crearInputsLabels();
  }
};

//CREACION DE INPUTS Y LABELS
const crearInputsLabels = () => {
  for (let persona of familia) {
    let $formResultado = document.querySelector('#familiares');

    let nuevoLabel = document.createElement('label');
    nuevoLabel.setAttribute('for', `${persona}`);
    nuevoLabel.textContent = `${persona}:`;
    $formResultado.appendChild(nuevoLabel);

    let nuevoInput = document.createElement('input');
    nuevoInput.setAttribute('placeholder', 'Ingresar Edad');
    nuevoInput.setAttribute('type', 'text');
    nuevoInput.setAttribute('class', 'integrante');
    nuevoInput.setAttribute('id', `${persona}`);
    nuevoInput.setAttribute('maxlength', '3');
    $formResultado.appendChild(nuevoInput);
  }
};

//FUNCIONES DE CALCULOS
//PROMEDIO
const calcularPromedioEdades = (array) => {
  let promedioEdad = 0;
  for (let i = 0; i < array.length; i++) {
    promedioEdad = promedioEdad + Number(array[i]);
  }

  return (promedioEdad / array.length).toFixed(2);
};

//NUMERO MAS GRANDE
const mayorEdad = (array) => {
  let edadMayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > edadMayor) {
      edadMayor = array[i];
    }
  }
  return edadMayor;
};

//NUMERO MAS CHICO
const menorEdad = (array) => {
  let edadMenor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < edadMenor) {
      edadMenor = array[i];
    }
  }
  return edadMenor;
};

//FUNCION CALCULAR EDADES
const $botonCalcular = document.querySelector('#boton-calcular');
const $botonLimpiar = document.querySelector('#boton-limpiar');
const $mayorEdad = document.querySelector('#mayor-edad');
const $menorEdad = document.querySelector('#menor-edad');
const $promedioEdad = document.querySelector('#promedio-edad');

function calcularEdades() {
  const $inputs = [...document.querySelectorAll('.integrante')];
  let inputsEdades = [];
  $inputs.forEach((input) => {
    let edadIntegrante = input.value;
    if (validarEdades(edadIntegrante) === '');
    inputsEdades.push(edadIntegrante);
  });

  $mayorEdad.value = mayorEdad(inputsEdades);
  $menorEdad.value = menorEdad(inputsEdades);
  $promedioEdad.value = calcularPromedioEdades(inputsEdades);
}

function validarEdades(edadIntegrante) {
  if (edadIntegrante === '') {
    return 'Este campo debe tener al menos 1 caracter';
  } else if (!/^[0-9]+$/.test(edadIntegrante)) {
    return 'El campo edades solo puede tener numeros';
  } else if (edadIntegrante > 150) {
    return 'Ingrese una edad valida entre 1 y 150 años';
  } else {
    return '';
  }
}

function crearObjetoErrores() {
  const $inputs = [...document.querySelectorAll('.integrante')];
  let errores = {};
  $inputs.forEach((input) => {
    let edadIntegrante = input.value;
    let idIntegrante = input.id;
    let errorValidarEdades = validarEdades(edadIntegrante);
    if (errorValidarEdades) {
      errores[idIntegrante] = errorValidarEdades;
    }
  });

  return errores;
}

function manejarErrores(errores) {
  let $formResultado = document.querySelector('#familiares');
  const keys = Object.keys(errores);
  const $errores = document.querySelector('#errores');
  let cantidadErrores = 0;

  eliminarErroresExistentes();
  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $formResultado[key].classList.add('error');

      const $error = document.createElement('li');
      $error.innerText = error;

      $errores.appendChild($error);
    } else {
      $formResultado[key].classList.remove('error');
    }
  });
  return cantidadErrores;
}

function eliminarErroresExistentes() {
  const elementosErrores = document.querySelectorAll('#errores li');
  elementosErrores.forEach(function (elemento) {
    elemento.remove();
  });
}

//BUSQUE EN GOOGLE COMO PASAR DOS O MAS FUNCIONES AL EVENTO ONCLICK Y ME DIO ESTE RESULTADO
function validarFormulario() {
  let errores = crearObjetoErrores();
  let cantidadErrores = manejarErrores(errores);
  if (cantidadErrores === 0) {
    calcularEdades();
  }
}

$botonCalcular.onclick = validarFormulario;

//EVENTO RESETEAR VALORES
$botonLimpiar.onclick = function () {
  document.querySelector('#familiares').reset();
  document.querySelector('#resultados').reset();
};

agruparFamiliares();
