// Dado el siguiente html usa querySelector para mostrar por consola el 3
//  personaje con el atributo data-function="testMe".


const personajes = document.querySelectorAll('[data-function]')

let i = 0;
for (const personaje of personajes) {
    if (i === 2 ) {
        console.log(personaje);
        break;
    }
    i++
}

