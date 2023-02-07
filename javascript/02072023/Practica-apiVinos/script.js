const contenedor$$ = document.getElementById('contenedor')
const select$$ = document.getElementById('select-vino')
const btnFetch$$ = document.querySelector('button')
const ul$$ = document.createElement('ul')

btnFetch$$.addEventListener('click', async ()=>{
    //bloquear boton
    btnFetch$$.disabled=true
    const result = await fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${select$$.value}`)
    const array = await result.json()
    console.log(array);
    console.log(select$$.value);
    dibujarVinos(array);
    //desbloquear boton
    btnFetch$$.disabled=false
  })

function dibujarVinos(vinos){
  ul$$.innerHTML = ''
  contenedor$$.appendChild(ul$$)
  const span$$ = document.createElement('span')
  contenedor$$.appendChild(span$$)
  for (let i = 0; i < vinos.length-1; i++) {
    dibujarVino(i, vinos)
  }
}

function dibujarVino (i, vinos){
  console.log(vinos[i].winery);
    const li$$ = document.createElement('li')
    const img$$ = document.createElement('img')
    const h4$$ = document.createElement('h4')
    const p$$ = document.createElement('p')
    const span$$ = document.createElement('span')
    ul$$.appendChild(li$$)
    li$$.appendChild(h4$$)
    li$$.appendChild(img$$)
    li$$.appendChild(p$$)
    li$$.appendChild(span$$)
    img$$.setAttribute('src', vinos[i].image)
    h4$$.innerHTML = `${vinos[i].id} - ${vinos[i].wine}`
    p$$.innerHTML = `Bodega: ${vinos[i].winery}`
    span$$.innerHTML = (()=>{
      let estrellas = ""
      for(let i = 0; i < Number(vinos[i].rating.average); i++){
        estrellas+="⭐"
      }    
      return  estrellas
    })()


}

