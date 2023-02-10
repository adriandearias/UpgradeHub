// Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!',
// dentro de todos los div con la clase .fn-insert-here

const fnInsertHere = document.querySelectorAll('.fn-insert-here')

console.log(fnInsertHere);

for (const element of fnInsertHere) {
    const p$$ = document.createElement('p')
    element.appendChild(p$$)
    p$$.innerHTML = 'Voy dentro!'
}