// Dado el siguiente html usa querySelector para mostrar por consola
//  todos los elementos con el atributo data-function="testMe".

const testMeElements = document.querySelectorAll(`[data-function='testMe']`)

console.log(testMeElements);

for (let i = 0; i < testMeElements.length; i++) {
    console.log(testMeElements[i]);
}
