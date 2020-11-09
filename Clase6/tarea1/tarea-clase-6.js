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
  familia.push(integrante);
  let confirmacion = confirm('Quieres ingresar otro integrante?');

  if (confirmacion === true) {
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
    nuevoInput.setAttribute('type', 'number');
    nuevoInput.setAttribute('class', 'integrante');
    nuevoInput.setAttribute('id', `${persona}`);
    $formResultado.appendChild(nuevoInput);
  }
};

//FUNCIONES DE CALCULOS
//PROMEDIO
const calcularPromedioEdades = (array) => {
  let promedioEdad = 0;
  for (let i = 0; i < array.length; i++) {
    promedioEdad = promedioEdad + array[i];
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

//EVENTO CALCULAR
const $botonCalcular = document.querySelector('#boton-calcular');
const $botonLimpiar = document.querySelector('#boton-limpiar');
const $mayorEdad = document.querySelector('#mayor-edad');
const $menorEdad = document.querySelector('#menor-edad');
const $promedioEdad = document.querySelector('#promedio-edad');

$botonCalcular.onclick = function () {
  const $inputs = [...document.querySelectorAll('.integrante')];
  let inputsNumero = [];
  for (let i = 0; i < $inputs.length; i++) {
    inputsNumero.push(Number($inputs[i].value));
  }

  $mayorEdad.value = mayorEdad(inputsNumero);
  $menorEdad.value = menorEdad(inputsNumero);
  $promedioEdad.value = calcularPromedioEdades(inputsNumero);
};

//EVENTO RESETEAR VALORES
$botonLimpiar.onclick = function () {
  document.querySelector('#familiares').reset();
  document.querySelector('#resultados').reset();
};

agruparFamiliares();
