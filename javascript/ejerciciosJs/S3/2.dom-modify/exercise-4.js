//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const body$$ = document.querySelector('body')

const div$$ = document.createElement('div')
const p$$ = document.createElement('p')

body$$.appendChild(div$$)
div$$.appendChild(p$$)

p$$.innerHTML = 'Soy dinámico!'