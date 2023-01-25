// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
// posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
// Haz varios ejemplos y compruebalos.
// Sugerencia de función:
//function findArrayIndex(array, text) {}
// Ej array:
// ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    let existePos = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            existePos = array.indexOf(array[i])
        //O devuelve la posición, si no existe, return -1
        }
    }
    return existePos
}

const arrayAnimales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
//O devuelve la posición, si no existe, return -1
console.log(findArrayIndex(arrayAnimales, 'Salamandra'));




