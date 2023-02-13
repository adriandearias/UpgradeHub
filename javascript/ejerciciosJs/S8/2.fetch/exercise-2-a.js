// Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
// para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro
//  de la api, el valor del input.



const baseUrl = 'https://api.nationalize.io?name=';
const btn = document.querySelector('button')
const input = document.querySelector('input')

btn.addEventListener('click', async () =>{
    const result = await fetch(`${baseUrl}${input.value}`)
    let resultToObject = await result.json()
    console.log(resultToObject);
})
