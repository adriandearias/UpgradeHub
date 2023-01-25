// Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
// `removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
// llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
// javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.


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

function removeItem(array, text){
    const posItemToRemove = findArrayIndex(array, text)
    array.splice(posItemToRemove, 1);
    return array
}

const arrayAnimales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
// eliminamos Mosquito
console.log(removeItem(arrayAnimales, 'Mosquito'));
//resultado del console.log: [ 'Caracol', 'Salamandra', 'Ajolote' ]