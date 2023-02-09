// Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' 
// entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const div$$ = document.querySelector('div')
const p$$ = document.createElement("p")
div$$.insertAdjacentElement("afterbegin",p$$)
//el enunciado es un poco confuso creo