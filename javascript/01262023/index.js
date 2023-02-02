// -------------------------------
//       Callbacks funciones
// -------------------------------
//

const f1 = function () {
  console.log("ERROR");
};

const f2 = function () {
  console.log("OK");
};

/**
 *
 * @param {boolean} resultadoOperacion
 */
function comprobar(resultadoOperacion, funcionError, funcionOk) {
  if (resultadoOperacion) {
    funcionOk();
  } else {
    funcionError();
  }
}

//comprobar(true, f1, f2);

function mostrarResultado(resultado) {
  console.log(resultado);
}

//define una funcion sumarN, que sume los N primeros numeros naturales de 0 hasta N
//input 4
// output -> 0+1+2+3+4 (10)
/**
 * @param {el numero hasta donde hay que llegar en la suma} n
 * @param {una funcion, que tras completar la suma muestre el resutado} funcionMostrar
 */

function sumarN(n, funcionMostrar) {
  let acc = n;
  for (let i = 0; i < n; i++) {
    acc += i;
  }
  funcionMostrar(acc);
}

//sumarN(4,mostrarResultado)

//define una funcion saludar, que reciba como parametro un nombre y haga un console.log
//diciendo 'saludar' + nombre
function saludar(nombre) {
  console.log("Hola", nombre);
}

// genera una funcion despedir, que reciba como parametro un nombre y haga un console.log
//diciendo 'adios' + nombre
function despedir(nombre) {
  console.log("Adiós", nombre);
}
// genera una funcion bienvenida que reciba como parametro un nombre y si ese nombre
//tiene mas de 5 letras, lo despida, y si tiene menos, lo salude
//tambien va a recibir dos funciones comop @param, una para saludar y otra para despedir

function bienvenida(nombre, funcionSaludar, funcionDespedir) {
  if (nombre.length > 5) {
    funcionSaludar(nombre);
  } else {
    funcionDespedir(nombre);
  }
}

//bienvenida('Adri', saludar, despedir)

// -------------------------------
//       Funciones Flecha
// -------------------------------
//

const function1 = function (nombre) {
  console.log(nombre);
};

const function2 = (nombre) => {
  console.log(nombre);
};

// console.log(((a,b) => {
//   return a+b
// })(1,2));

// -------------------------------
//       Calculadora
// -------------------------------
//
/**
 * @param {} numero1
 * @param {} numero2
 * @param {} operacion
 */

function calculadora(numero1, numero2, operacion) {
  return operacion(numero1, numero2);
}

//console.log(calculadora(3, 2, (a, b) => a + b)); //cuando es una sola línea podemos eliminar las llaves y el return, igual a 105 pero simplificada
// console.log(
//   calculadora(3, 2, (a, b) => {
//     return a * b;
//   })
// ); //igual a la de linea 104

//Funcion flecha que reciba un número y le sume2
const sumar2 = (num) => num + 2;
//console.log(sumar2(3));

//Funcion flecha que se llame aplicar, que reciba un array y la funcuin sumar2 se la aplique a todos los elementos del array

let arrayNum = [1, 2, 3];
const aplicar = (arrayNum, sumarDos) =>{
  for (let i = 0; i < arrayNum.length; i++) {
    arrayNum[i] = f(array[i])
  }
}

//console.log(aplicar(arrayNum, sumar2));

//crea una funcion flecha que dada su palabra devuelva su longitud

const saberLongitud = (palabra) => palabra.length
console.log(saberLongitud('Hola'));

// -------------------------------
//       MAP & FILTER
// -------------------------------
// genera una funcion que se llame filtrar, que reciba una rray, una funcion y genere un nuevo array solo con elementos que
//que cumplen la funcion, devuelve ese array una vez completado.

const mayorQue = (num) => num>1

function filtrar(array, f){
  const filtrado = []
  array.forEach(element => {
    if(f(element)){
      filtrado.push(element)
    }
  });
  return filtrado
}

console.log(filtrar([1,2,3], (num) => num*num > 3));