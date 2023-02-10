// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click 
// que ejecute un console log con la información del evento del click

const body$$ = document.querySelector('body')
const btnToClick$$ = document.createElement('button')

body$$.appendChild(btnToClick$$).innerHTML='Soy un botón'
btnToClick$$.setAttribute('id', 'btn-to-click')

btnToClick$$.addEventListener('click', (event)=>{
    console.log(event);
})
