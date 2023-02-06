//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const body$$ = document.querySelector('body')
const div$$ = document.createElement('div')
body$$.appendChild(div$$)

for (let i = 0; i < 6; i++) {
    const p$$ = document.createElement('p')
    div$$.appendChild(p$$)
}