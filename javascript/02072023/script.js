const btnFetch$$ = document.getElementById('btn-fetch')
const contenedor$$ = document.getElementById('contenedor')
//const input$$ = document.getElementById('input')
const selectDia$$ = document.getElementById('select-dia')

btnFetch$$.addEventListener('click', async ()=>{
  //bloquear boton
  btnFetch$$.disabled=true
  const resultado = await fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${selectDia$$.value}`)
  const obj = await resultado.json()
  dibujarDatosDia(obj);
  //desbloquear boton
  btnFetch$$.disabled=false
})

function dibujarDatosDia(dia){
  //crear span con la temperatura de el dia y lo añada al div
  const span$$ = document.createElement('span')
  contenedor$$.appendChild(span$$)
  span$$.innerHTML = dia.temperatura
}
