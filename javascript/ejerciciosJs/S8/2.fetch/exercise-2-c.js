// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado
//  y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name=';
const btn = document.querySelector('button')
const input = document.querySelector('input')
const body = document.querySelector('body')
const div = document.createElement('div')
body.appendChild(div)

btn.addEventListener('click', async () =>{
    const result = await fetch(`${baseUrl}${input.value}`)
    const resultToObject = await result.json()

    // for (const object of resultToObject.country) {
    //     const p = document.createElement('p')
    //     const btnX = document.createElement('button')
    //     const div2 = document.createElement('div')
    //     btnX.setAttribute('class', `btn-x-${input.value}`)
    //     div.appendChild(div2)
    //     div2.setAttribute('class', `div-result ${input.value}`)
    //     div2.appendChild(btnX)
    //     div2.appendChild(p)
    //     p.setAttribute('class', `p-${input.value}`)
    //     btnX.innerHTML = '❌'
    //     p.innerHTML = `El nombre ${input.value} tiene ${object.probability} de ser ${object.country_id}`
    // }
    console.log(resultToObject.country[0].country_id);
    for (let i = 0; i < resultToObject.country; i++) {
        const p = document.createElement('p')
        const btnX = document.createElement('button')
        const div2 = document.createElement('div')
        btnX.setAttribute('class', `btn-x-${input.value}`)
        div.appendChild(div2)
        div2.setAttribute('class', `div-result ${input.value}`)
        div2.appendChild(btnX)
        div2.appendChild(p)
        p.setAttribute('class', `p-${input.value}`)
        btnX.innerHTML = '❌'
        p.innerHTML = `El nombre ${input.value} tiene ${resultToObject.country[i].probability} de ser ${resultToObject.country[i].country_id}`
    }

    const btnX = document.querySelector(`.btn-x-${input.value}`)
    console.log(btnX);
    borrar(btnX)
})

function borrar(btn){
    btn.addEventListener('click', () =>{
        const divPadre = document.querySelector(`.div-result ${input.value}`)
        console.log(divPadre);
        divPadre.remove()

      })
}

 
