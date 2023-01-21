// -----------------------------
//        
// -----------------------------
// Dado el string contar las veces que aparece la letra 'e'

const palabra = 'ajeiquedv'
const array = [1,2,3,4,5,6,7,8,9,10,90]

let existe90 = false
for(const num of array){
  if(num === 90){
    existe90 = true
    break
  }
}
//console.log(existe90);

const obj = {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 90: 'Hola'}

//lo correcto seria apuntar por clave

if(obj['90' !== undefined]){
  existe90 = true
}

// -----------------------------
//       EJERCICIO 1 
// -----------------------------
//define una funcion que reciba un dni y devuelva la persona que se encuentra en el array de personas con ese DNI

const arrayPersonas = [{dni: '34343433N', nombre: 'Pepe'}, {dni: '34234234K', nombre: 'Raul'}]

function buscarPersonaPorDniArray(dni){
  let personaEncontrada = null;
  for (const persona of arrayPersonas) {
    if(persona.dni === dni){
      personaEncontrada = persona
      break
    }
  }
  return(personaEncontrada);
}

//console.log(buscarPersonaPorDniArray('34343433N'));

// -----------------------------
//       EJERCICIO 2
// -----------------------------
//const arrayPersonas = [{dni: '34343433N', nombre: 'Pepe'}, {dni: '34234234K', nombre: 'Raul'}]
// define una funcón que reciba un dni, y devuelva la// persona que se encuentra en el objeto de personas con ese dni// en caso de no encontrarla, devolver null
const objPersonas = {
  '34343433N':{dni: '34343433N', nombre: 'Pepe'},
  '34234234K':{dni: '34234234K', nombre: 'Raul'}
}

function buscarPersonaPorDniObjeto(dni){
  let personaEncontrada = null;
  if(objPersonas[dni] !== undefined){
    personaEncontrada = objPersonas[dni]
  }
  return(personaEncontrada);
}

//console.log(buscarPersonaPorDniObjeto('34343433N'));

// -----------------------------
//       EJERCICIO 3
// -----------------------------
// dado el array universidad crea una funcion que reciba una asignatura
// @return numero de alumnos que tiene esa asignatura
// observacion si la asignatura no existe en array devolver 0 alumnos

const universidadOld = [{asignatura: 'mates', alumnos: 5}, {asignatura: 'fisica', alumnos: 10}, {asignatura: 'programacion', alumnos: 15}]

function numeroAlumnosAsignatura(asignaturaParam) {
  let numeroAlumnos = 0;
  for (const materia of universidadOld) {
    if (materia.asignatura === asignaturaParam) {
      numeroAlumnos = materia.alumnos;
      break
    }
  }
  return numeroAlumnos;
}

//console.log(numeroAlumnosAsignatura('mates'));

// -----------------------------
//       EJERCICIO 4
// -----------------------------
//Define una funcion que devuelva el numero de alumnos de esa asignatura en caso de no encontrarla devolver 0

const universidadObj = {
  mates: {asignatura: 'mates', alumnos: 5},
  fisica: {asignatura: 'fisica', alumnos: 10},
  programacion: {asignatura: 'programacion', alumnos: 15}
}

function buscarNumAlumnosObj(clase){
  let claseExistente = universidadObj[clase]
  if(claseExistente !== undefined){
    return claseExistente.alumnos
  }
  return 0
}

//console.log(buscarNumAlumnosObj('fisica'));


// --------------------------------------
//       Contar cuantas veces aparece
// --------------------------------------
//

const asignaturas = ['mates', 'lengua', 'ciencias', 'quimica', 'fisica', 'fisica', 'ciencias']

const asignaturasAnalisis = {}

for(const asignatura of asignaturas){
  // caso en que la asignatura todavía no este introducida en el objeto    
  if(!asignaturasAnalisis[asignatura]){asignaturasAnalisis[asignatura]=1}
  // caso en que la asignatura ya ha sido introducida en el objeto previamente    
  else{asignaturasAnalisis[asignatura]++}
}

//console.log(asignaturasAnalisis);


// --------------------------------------
//       Ejercicio 5
// --------------------------------------
// define un objeto que tenga como claves las letras del texto y como valores las veeces que aparece cada letra
// ejemplo: input: 'hola que tal'
//* ejemplo output:
// {
//   h:1,
//   o:1,
//   l:2,
//   a:1,
//   q:1,
//   u:1,
//   e:1,
//   etc
// }

const texto = 'hola que tal'
const letrasObj = {}

for(const letra of texto){
  if (letra === ' ') {
    continue
  }
  if (!letrasObj[letra]) {
    letrasObj[letra] =1;
  }else{
    letrasObj[letra]++
  }
}

//console.log(letrasObj);

// --------------------------------------
//       Ejercicio 6
// --------------------------------------
// Dado este array, crea una funcion que reciba un array como el anterior y devuelva un objeto
// contando los alumnos que hay por asignatura

/**
 * @param arrayUniversidad
 * @param asignatura
 * @return objeto contando todos los alumnos por @asignaturaa
 */

/**
 * input = universidad[]
 * output =
 * {
 *  mates: 10,
 *  fisica: 18,
 *  programacion: 24
 * }
 */

const universidad = [
  { asignatura: 'mates', turno: 'mañana', alumnos: 5 },
  { asignatura: 'mates', turno: 'tarde', alumnos: 5 },
  { asignatura: 'fisica', turno: 'mañana', alumnos: 10 },
  { asignatura: 'fisica', turno: 'tarde', alumnos: 8 },
  { asignatura: 'programacion', turno: 'tarde', alumnos: 15 },
  { asignatura: 'programacion', turno: 'mañana', alumnos: 9 },
]

function alumnosPorAsignatura (arrayUnviersidad, asignatura){
  const alumnosPorAsignaturaObj = {}
  for(const clase of arrayUnviersidad){
    if (!alumnosPorAsignaturaObj[clase.asignatura]) {
      alumnosPorAsignaturaObj[clase.asignatura] = clase.alumnos
    }else{
      alumnosPorAsignaturaObj[clase.asignatura] += clase.alumnos
    }
  }
  return alumnosPorAsignaturaObj[asignatura]
}

//console.log(alumnosPorAsignatura(universidad, 'programacion'));

// --------------------------------------
//       Ejercicio 7
// --------------------------------------
// Genera una funcion que diga si dado a un array, la suma de sus elementos es igual a su longitud
/**
 * @param array
 * @return true si la longitud de array es la suma de sus elementos, false en caso contrario
 * 
 */

const arrayElementos = [1,2,0,1]

function esIgualLaSumaALaLongitud(array){
  let acc = 0;
  for (const elemento of arrayElementos) {
    acc += elemento;
  }
  if (array.length !== acc) {
    return false
  }
  return true
}

//console.log(esIgualLaSumaALaLongitud(arrayElementos));

// --------------------------------------
//       Ejercicio 8
// --------------------------------------
// Crea una funcion que dado un @numero y un caracter, devuelva un 
//array con dicho caracter repetido @numero de veces 
/**
 * @param numero
 * @param caracter
 * @return array
 */

function contadorCaracterRepetido(num, caracter){
  let newArray = []
  for (let i = 0; i < num; i++){
      newArray.push(caracter);
  }
  return newArray
}

//console.log(contadorCaracterRepetido(8, 'a'));

// --------------------------------------
//       Ejercicio 9
// --------------------------------------
// Crea una funcion que dado un array devuelva otro array invertido

let newArray = [1,2,3,4,5,6]
function reverse(array){
  return array.reverse()
}

//console.log(reverse(newArray));

// --------------------------------------
//       Ejercicio 9
// --------------------------------------
// Crea una funcion que dado un array elimine los elementos que no sean números y lo devuelva limpio

let itemsArray = [0, 1, false, 2, undefined, null, '']

// function limpiarArray(array){
//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       array.splice(i, 1)
//       i--
//     }
//   }
//   return array
// }
// console.log(limpiarArray(itemsArray));

function limpiarArray(array){
  for (let i = array.length; i > 0; i--) {
    if (isNaN(array[i])) {
      array.splice(i, 1)
    }
  }
  return array
}

//console.log(limpiarArray(itemsArray));

// --------------------------------------
//       Ejercicio 10
// --------------------------------------
// Escribe una funcion dado el siguiente array de arrays, 
// que retorne un objeto compuesto por clave valor,
/**
 * [['a' ,1], ['b' ,2], ['c' ,3]]
 * @param array
 * @return objeto
 */

const arrayDeArrays = [['a' ,1], ['b' ,2], ['c' ,3]]

function arrayToObject(arrayMultiple){
  let newObject = {}
  for (const array of arrayMultiple) {
    newObject[array[0]] = array[1]
  }
  return newObject
}

//console.log(arrayToObject(arrayDeArrays));

const objetoNew = { a: 1, b: 2, c: 3 }
function objectToArray(objeto){
  let newArray = []
  for (const key in objeto) {
    newArray.push([key, objeto[key]])
  }
  return newArray
}

//console.log(objectToArray(objetoNew))

