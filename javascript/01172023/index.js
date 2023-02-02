// -----------------------------
//         CONCAT
// -----------------------------
// 
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

//console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

// -----------------------------
//         SORT
// -----------------------------
// 
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const arrayX = [1, 30, 4, 21, 100000];
arrayX.sort();
console.log(arrayX);
// Expected output: Array [1, 100000, 21, 30, 4]

// -----------------------------
//         EJERCICIO 1
// -----------------------------
// Funcion para pasar de greados celsius a grados farenheit

const celsius = 40;

function celsiusToFarenheit(celsius){
  const fare = (9/5*celsius)+32;
  return fare
}

//console.log(celsiusToFarenheit(celsius));

// -----------------------------
//         EJERCICIO 2
// -----------------------------
// Mínimo entre dos numeros

function minimo(num1, num2){
  if (num1>num2) {
    return num2
  }else{
    return num1
  }
}
//Ternarios en vez de if -> return (num1<num2? num1: num2);
//console.log(minimo(4,6));

// -----------------------------
//         EJERCICIO 3
// -----------------------------
// Crea una funcion llamada esLoginValido, que reciba un string (user) y otro string (pass) 
// devuelva si en la BBDD existe el loginCorrecto esas credenciales

const loginCorrecto = {
  user: 'admin',
  pass: '1234'
}

function esLoginValido(user, pass){
  return user === loginCorrecto.user && pass === loginCorrecto.pass
}

//console.log(esLoginValido('administrador','1234')); //devolvera false pq esta introduciendo el usuario mal

// -----------------------------
//         EJERCICIO 4
// -----------------------------
// Crea una funcion empiezaPorNumero que reciba un string y devuelva true/false si
//ese string comienza por un digito "4ad83" -> true |"uen345435k" -> false

function empiezaPorNumero(numero) {
  return !isNaN(Number(numero[0]))
}

console.log(empiezaPorNumero('22dffd2'));

// -----------------------------
//         EJERCICIO 5
// -----------------------------
// Define una funcion maxArray que dado un array, devuelva el numero mayor contenido en el array

function maxArray(array) {
  let numMayor = array[0];
  for (const valor of array) {
    if (array[valor]>numMayor) {
      numMayor = array[valor]
    }
  }
  return numMayor;
}

miArray = [1,2,3,10,5,6,99,8,2]
console.log(maxArray(miArray));

// -----------------------------
//         EJERCICIO 6
// -----------------------------
// Define una funcion arrayCelsiusToArrayFarenheit que dado un array con temperaturas en celsius devuelva un array con las temperaturas convertidas a farenheit 
//function celsiusToFarenheit(celsius){
//   const fare = (9/5*celsius)+32;
//   return fare
// }

function arrayCelsiusToArrayFarenheit(arrayCelsius){
  const arrayFarenheit = [];
  for (const valor of arrayCelsius) {
    arrayFarenheit.push(celsiusToFarenheit(valor));
  }
  return arrayFarenheit
}

arrayCelsius = [30, 35, 36, 40, 42, 44]
console.log(arrayCelsiusToArrayFarenheit(arrayCelsius));


// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
//     F U N C I O N E S  QUE UTILIZAN METODOS COMO PARAMETRO
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

function ejecutor(funcion){
  funcion()
}

function saludar() {
  console.log('Hola');
}

// -----------------------------
//         EJERCICIO 7
// -----------------------------
// Defin e una funcion quie reciba dos funciones, (f1 y f2), las ejecute y devuelva el maximo entre los dos resultados

function f1(){
  return 1
}

function f2() {
  return 2
}

function maximoDosFunciones(f1, f2) {
  return (f1() > f2()? f1(): f2())
}

console.log(maximoDosFunciones(f1, f2), 'es mayor');

// -----------------------------
//         FILTER
// -----------------------------
// CREA UN NUEVO ARRAY COPN TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION IMPLEMENTADA POR LA FUNCION DADA

const arr = [1,2,3,4]

function filtroMenoresQueDos(num){
  if (num < 2) {
    return true
  }else{
    return false
  }
}

const arrFiltrado = arr.filter(filtroMenoresQueDos)
console.log(arrFiltrado);

// -----------------------------
//         EJERCICIO 8
// -----------------------------
// REALIZA UN FILTRO PARA PALABRAS CON LONGITUD MAYOR QUE 5 Y APLICALA AL SIGUIENTE ARRAY

const animales = ['perro','gato','periquito', 'elefante', 'guepardo']

function filtroPalabrasMasLargasQue5(palabra){
  if(palabra.length > 5){
    return true
  }else{
    return false
  }
}

const animalesFiltrados = animales.filter(filtroPalabrasMasLargasQue5)
console.log(animalesFiltrados);

// -----------------------------
//         EJERCICIO 9
// -----------------------------
// dado el siguiente array de objetos, escribe un filtro y aplicalo para filtrar del array de alumnos, aquellos que la nota sea superior a 7

const alumnos = [{nombre: 'oscar', nota: 5},{nombre: 'luis', nota: 6},{nombre: 'manuel', nota: 9}]

function filtroNotaSupeior7(alumno){
  return alumno.nota>7
}

const alumnosFiltrados = alumnos.filter(filtroNotaSupeior7)
//console.log(alumnosFiltrados);

// -----------------------------
//         METODO M A P 
// -----------------------------
// El metodo map crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos
const numeros = [1,2,3] //queremos sumarle 1 a todos los elementos

// for (let i = 0; i < numeros.length; i++) {
//   numeros[i]++
// }

function incrementar(num){
  return num+1
}

const numerosIncrementados = numeros.map(incrementar)

//console.log(numerosIncrementados);

// -----------------------------
//        EJERCICIO 10
// -----------------------------
// Dado el siguiente array de objetos escribe una funcion para aplicar a traves de map que aumente la nota de los alumnos en 1 punto

//const alumnos = [{nombre: 'oscar', nota: 5},{nombre: 'luis', nota: 6},{nombre: 'manuel', nota: 9}]

function incrementarNotas(alumno){
  alumno.nota += 1;
  return alumno
}

const alumnosIncrementados = alumnos.map(incrementarNotas)

console.log(alumnosIncrementados);

// --------------------------------------
//        EJERCICIO FINAL OPCIONAL
// --------------------------------------
// Dado este array numerico, realizar un filtro para filtrar los elementos entre 3 y 6 (incluidos extremos),
// acto seguido aplicar un map para elevarlos al cuadrado
// output: [9,16,25,36]
const numerosNew = [1,2,3,4,5,6,7,8]

function reducirArrayExtremos2(numeros){
  return numeros>2 && numeros<7
}

function elevarCuadrado(x){
  return x => x*x
}

//lo logico hubiese sido crear una funcion donde paso array y le hago un array.splice(2,2) para eliminaar extremos pero no puedo hacerlo con filter.
const arrayFiltrada = numerosNew.filter(reducirArrayExtremos2).map(elevarCuadrado())
console.log(arrayFiltrada);