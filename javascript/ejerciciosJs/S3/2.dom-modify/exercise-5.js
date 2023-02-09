//Basandote en el siguiente html, inserta en el h2 con la clase .fn-insert-here 
// el texto 'Wubba Lubba dub dub'.

const fnInsertHere$$ = document.getElementsByClassName('fn-insert-here')[0].innerHTML='Wubba Lubba dub dub';
//lo hago con getElementsByClassName(coge todos en 1 array) para probar, tambien podia hacerlo con querySelector era mas sencillo en este caso
console.log(fnInsertHere$$);
