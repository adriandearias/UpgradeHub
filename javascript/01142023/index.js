const persona = {
  id: 1,
  nombre: "Adrian",
  tfno: "666222333",
  edad: 30,
};
//console.log(`${persona.nombre} ${persona.tfno}`);
//console.log(persona);

const persona2 = {};
persona2.nombre = persona.nombre;
persona2.tfno = persona.tfno;
persona2.edad = persona.edad;
//console.log(persona2);

// -----------------------------
//       bucle FOR IN
// -----------------------------
//nuevo bucle para recorrer y asignar propiedades de objetos

for (const clave in persona) {
  if (clave !== "id" && clave !== "nombre") {
    persona[clave] = persona2[clave];
  }
}
//console.log(persona2);
// -----------------------------
//       EJERCICIO 1
// -----------------------------
// DADO EL SIGUIENTE OBJETO, BUSCA LA ASIGNATURA QUE TENGA LA MAXIMA NOTA
const notas = {
  mates: 4,
  lengua: 6,
  ingles: 9,
  ciencias: 8,
};
let asignaturaMax = "mates"; //estamos hardcodeando la clave asignandola asi, la forma correcta seria "Object.keys(notas)[0]"

for (const clave in notas) {
  if (notas[clave] > notas[asignaturaMax]) {
    asignaturaMax = clave;
  }
}

//console.log(`La nota más alta es de ${asignaturaMax}`);

//FUNCIONES NUEVAS
//Hay funciones que tambien funcionan tanto en strings como en arrays, por ejemplo, a un string no podemos acceder por posición si hacemos:
// soyUnString= "Hola soy paco" para acceder a la "H" deberíamos ir a la posición soyUnString[0] = A <--- esto es invalido ya que no podemos reemplazar en string por posiciñon

// -----------------------------
//       FUNCION INCLUDES
// -----------------------------
//funcion includes -> con esta funcion podemos recorrer tanto un string como un array para ver si contiene un caracter en una posicion determinada

const numeros = [1, 2, 3, 4, 5, 6];
const numerosStr = "123456";

const existeEl2 = numeros.includes(4); //nos recorrerá el array buscando el 4
//console.log(existeEl2); // nos devuelve true
const existeEl2Str = numerosStr.includes("2");
//console.log(existeEl2Str); //Nos devuelve true ya que en el string tenemos el 2 en una de las posiciones de la cadena

//IMPORTANTE -> SI EL PARAMETRO QUE LE PASAMOS ES UN 2 NUMERICO, LA FUNCION INCLUDES NO DIFFERENCIARA ENTRE STRING Y NUMBER YA QUE NO ES ESCTRICTO ES ->  == Y NO -> === (ESTRICTAMENTE ESTRICTO)
//EN STRINGS ES ESTRICTO, EN ARRAYS ES ESTRICTAMENTE ESTRICTO === AL COMPARAR VALORES.

// -----------------------------
//       EJERCICIO 2
// -----------------------------
//Dado el siguiente array, localizar la palabra más larga.

// IMPORTANTE NO UTILIZAR ES BUCLE COMO EN EL EJEMPLO SIGUIENTE, SOLO LO UTILIZAREMOS PARA OBJETOS NO ARRAYS
const palabras = ["perro", "gato", "periquito", "elefante"];
let palabraMasLarga = palabras[0];

for (const palabra in palabras) {
  if (palabras[palabra].length > palabraMasLarga.length) {
    palabraMasLarga = palabras[palabra];
  }
}
//FORMA CORRECTA
//RESETEO LA VARIABLE
palabraMasLarga = palabras[0];

for (const palabra of palabras) {
  if (palabraMasLarga.length < palabra.length) {
    palabraMasLarga = palabra;
  }
}

console.log(palabraMasLarga);

//pre-ejercicio
const arrayNumeros = [1, 2, 3];
const nombre = "Adrian";

//if (arrayNumeros[0]=== 'o') {}

// -----------------------------
//       EJERCICIO 3
// -----------------------------
//Comprobar en un array de palabras si alguna comienza por la letra "P"

const alumnos = ["oscar", "pedro", "manu"];
let existe = false;

for (const alumno of alumnos) {
  if (alumno[0] === "p" || alumno[0] === "P") {
    existe = true;
    break;
  }
}

console.log("¿Existe alumno que comience por P? ->", existe);

// -----------------------------
//     FUNCION SPLIT
// -----------------------------
// Con la funcion split puede separar con un patron cadenas de texto a un Array, en este caso separado por comas.

const temperaturasMensaje = "35,36,37,40,37,32";
const temperaturas = temperaturasMensaje.split(",");

console.log(temperaturasMensaje);
console.log(temperaturas);

// -----------------------------
//       EJERCICIO 4
// -----------------------------
//Hacer un split (hecho en la parte superior del ejercicio) y buscar la temperatura mas alta del array.
let temperaturaMax = temperaturas[0];
for (const temperatura of temperaturas) {
    if (temperaturaMax < Number(temperatura)) {
        temperaturaMax = Number(temperatura)
    }
}
console.log('La temperatura máxima es' ,temperaturaMax);

// Utilizamos la funcion Number pasandole el parametro temperatura para que convierta los  caracteres a numeros, 
// al pasarlos con la funcion Split en el array se quedan como strings.

// -----------------------------
//       EJERCICIO 5
// -----------------------------
//Buscar si existe un nombre que temrmine en N

const nombreStr = "raul-oscar-ramon-manuel-gabriel"
const nombres = nombreStr.split("-");
let existeNombreTerminadoN = false;
console.log(nombres);
for (const nombre of nombres) {
    if(nombre.at(-1) == 'n'){ // con la funcion at y restandole una posicion opbtenemos el ultiomo caracteer de un string
        // también podemos utilizar -------> nombre[nombre.length-1];
        existeNombreTerminadoN = true;
        break
    }
}
console.log(existeNombreTerminadoN);

const humedadesStr = '90,78,80,60,65,68'
const humedades = humedadesStr.split(',')

const humedadesFiltradas = []

for (const humedad of humedades) {
    if (Number(humedad)<70) {
        humedadesFiltradas.push(Number(humedad))
    }
}

console.log(humedadesFiltradas);

// -----------------------------
//     FUNCION SPLICE
// -----------------------------
console.log(humedadesFiltradas);
const returnDelMetodo = humedadesFiltradas.splice(1,2) // eliminaremos a partir de la posicion 1, 2 valores
console.log('Humedades filtradas', humedadesFiltradas);
console.log('Return del método (las que hemos eliminado con splice): ' ,returnDelMetodo);

// -----------------------------
//     FUNCION indexOf
// -----------------------------
//Devuelve el indice de la primera aparicion de un valor del array, devuelve -1 si no existe en el array
//Se utiliza para strings y numeros en array no para trabajar cn objetos
const alturasOlas = [4,5,6,7,8,5,3,2,1,2]
const hora = alturasOlas.indexOf(2)

console.log(hora);

// -----------------------------
//     EJERCICIO 6
// -----------------------------
//Utiliza indexOf para buiscar el indice de la hora donde se produjeron olas a 8 metros y elimina ese registro utilizando splice
alturasOlas.splice(alturasOlas.indexOf(8),1)
console.log(alturasOlas);

const pagos = [{id: 1, cantidad: 30}, {id: 2, cantidad:15}, {id: 3, cantidad: 10}]
const posicionPago2 = pagos.indexOf()
console.log(posicionPago2);

// -----------------------------
//     EJERCICIO 7
// -----------------------------
//Utiliza un for para obtener la posicion que ocupa el pago con id 2
let posicion = -1;
for (let i = 0; i < pagos.length; i++) {
    const pago = pagos[i]
    if (pago.id === 2){
        posicion = i
        break
    }
}

console.log(posicion);

// -----------------------------
//     EJERCICIO 8
// -----------------------------
//Dado el array de pagos, usa pop y push para generar un nuevo array de pagos con los pagos al reves
const pagosReverse = []

console.log('Mostramos array antes de vaciarla', pagos);
for (let i = 0; i < pagos.length; i++) {
  pagosReverse.push(pagos.pop());
  i--
}

console.log(pagosReverse);

// -----------------------------
// -----------------------------
// -----------------------------
//     F U N C I O N E S 
// -----------------------------
// -----------------------------
// -----------------------------

 function multiplicar(num1, num2){
  const resultado = num1*num2;
  return resultado
}

const a = 1
const b = 2

const result = multiplicar(a,b)
console.log(result)

// -----------------------------
//     EJERCICIO 9
// -----------------------------
//Funcion que sume 3 numeros pasados como parametro y devuelva el resultado -> mostrar el resultado por pantalla

function sumar(par1, par2, par3){
  const suma = par1+par2+par3
  return suma
  // se puede simplificar asi:
  // return par1+par2+par3
}

const x = 1
const y = 3
const z = 6

console.log(sumar(x,y,z));

// -----------------------------
//     EJERCICIO 10
// -----------------------------
//Funcion devuelva una palabra que comienza por la letra P

function empiezaPorP(palabra) {
  return palabra[0] === "P" || palabra[0] ==="p"
}
//devolvera true or false dependiendo si el string comienza por P
console.log(empiezaPorP("Pedro"));

// -----------------------------
//     EJERCICIO 11
// -----------------------------
//Dado el array nombresPersonas, utiliza un for y aplica la funcion empiezaPorP a cada nombre para mostrar por consola si empieza o no por P
const nombresPersonas = ['Pepe','Jose','Laura', 'pablo']

for (const nombre of nombresPersonas) {
  console.log(nombre, empiezaPorP(nombre));
}


// -----------------------------
//     EJERCICIO 12
// -----------------------------
//Dado el array temperaturas crea una funcion que muestre la temp maxima

const temperaturasStr = "35,36,37,40,37,52";
const temperaturasSplit = temperaturasStr.split(",");

function buscarMaxima(temperaturas){
  let temperaturaMasAlta = temperaturas[0];
  for (const temperatura of temperaturas) {
      if (temperaturaMax < Number(temperatura)) {
          temperaturaMax = Number(temperatura)
      }
  }
  return temperaturaMax
}

console.log(buscarMaxima(temperaturasSplit));