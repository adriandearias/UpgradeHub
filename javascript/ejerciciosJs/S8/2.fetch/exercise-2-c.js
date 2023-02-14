// En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado
//  y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = 'https://api.nationalize.io?name='
const input$$ = document.getElementById('input')
const btn$$ = document.getElementById('btn')
const body$$ = document.querySelector('body')
const divContent$$ = document.getElementById('draw-items')
body$$.appendChild(divContent$$)

btn$$.addEventListener('click', async () => {
    const getData = await fetch(`${baseUrl}${input.value}`)
    const objData = await getData.json()

    for (const object of objData.country) {
        const p$$ = document.createElement('p')
        const btnX = document.createElement('button')

        divContent$$.appendChild(btnX);
        divContent$$.appendChild(p$$)

        btnX.innerHTML = '❌'
        p$$.innerHTML = `El nombre ${input.value} tiene ${(object.probability*100).toFixed(2)}% de ser ${object.country_id}.`

        btnX.addEventListener('click', () =>{
            divContent$$.removeChild(p$$)
            divContent$$.removeChild(btnX)
        })
    }
});

