import {Dia} from "./dia.js";
import {estadoCieloToEmoji} from "./helpers.js";
import {getClimaPorDiaSemana} from "./api.js";

//const lunes = new Dia('lunes', 20, 70, 'soleado');
const semanaDiv = document.getElementById("div-semana");
const ul = document.createElement("ul");
semanaDiv.appendChild(ul)

const semana = [
  // new Dia("lunes", 20, 70, "soleado"),
  // new Dia("martes", 19, 75, "lluvioso"),
  // new Dia("miercoles", 18, 80, "nublado"),
  // new Dia("jueves", 15, 30, "lluvioso"),
  // new Dia("viernes", 22, 50, "nublado"),
  // new Dia("sabado", 20, 37, "soleado"),
  // new Dia("domingo", 21, 39, "soleado"),
];

//Hacer un for a cada dia de la semana e incluir el dato recibido en el array de semana

const diasSemana = ['lunes','martes','miercoles','jueves','viernes','sabado', 'domingo']

// for (const dia of diasSemana) {
//   getClimaPorDiaSemana(dia, addDia)
// }

/**
 * Hacer una funcion que dado un objeto de tipo dia lo meta en el array semana
 */
// function addDia(dia){
//   semana.push(dia)
// }

/**
 * Ejercicio: crear un ul dentro de semanaDiv, y para cada dia de la semana, crear un li, que muestre:
 * -dia
 * -temperatura
 *
 */

function addDia(dia){
  semana.push(dia)

  const li = document.createElement("li");
  const span = document.createElement('span')
  span.innerHTML = `${dia.diaSemana} ${dia.temperatura}ºC ${estadoCieloToEmoji(dia.estadoCielo)}` //${dia.getHumedadStr()
  li.appendChild(span);
  ul.appendChild(li);

}


for (const dia of diasSemana) {
  getClimaPorDiaSemana(dia, addDia)
}

  













//TEST json TO OBJECT
const personaJSON = `{"nombre": "oscar"}`
//console.log(personaJSON);
const personaObj = JSON.parse(personaJSON)
//console.log(personaObj);
//console.log(personaObj.nombre);

//TEST OBJECT to JSON
const personaTexto = JSON.stringify(personaObj)
//console.log(personaTexto);

