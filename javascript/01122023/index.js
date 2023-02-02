//metodos 
const frutas = ["kiwi", "manzana", "pera", "melocoton", "tomate"]

const indexPera = frutas.indexOf("pera")
console.log(indexPera)

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1



//quitar ultimo elemento array
frutas.pop() //quita el ultimo elemento del array
console.log(frutas)

frutas.push("piña") //qañade al final del array elemento
console.log(frutas)

frutas.reverse() //reverse array
console.log(frutas)

frutas.shift() //quita el primer elemento del array
console.log(frutas)

frutas.sort() //ordena
console.log(frutas)

frutas.splice(1,4, "Uvas") //elimina a partir de donde quieres eliminar y cuantos, pasando parametros, a partidr del 1 borrame 1, si añadimos un tercer parametro añadimos para sustituir por otro
console.log(frutas)

//metodos que no modifican
const frutas2 = ["kiwi", "manzana", "pera", "melocoton", "tomate"]
//SILICE - Devuelve la informacion entre los parametros que le damos entre 0 y 2 en el ejemplo
const frutasSlice = frutas2.slice(0,2)

//JOIN - convierte array en una cadena
const frutasJoin = frutas2.join("<>") //añadira <> como separacion al string entrer los elementos
console.log(frutasJoin)

//TOSTRING
const frutasToString = frutas2.toString()
console.log(frutasToString)

//CONCAT
let numbers=[1, 2, 3]
let numbers2=[4, 5, 6]
const numbersConcat = numbers.concat(numbers2)
console.log(numbersConcat)

