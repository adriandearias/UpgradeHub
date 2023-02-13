// En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...
// 'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


const baseUrl = 'https://api.nationalize.io?name=';
const btn = document.querySelector('button')
const input = document.querySelector('input')
const body = document.querySelector('body')

btn.addEventListener('click', async () =>{
    const result = await fetch(`${baseUrl}${input.value}`)
    const resultToObject = await result.json()

    console.log(resultToObject.country);
    const p = document.createElement('p')

    for (const object of resultToObject.country) {
        const p = document.createElement('p')
        object.country    
        body.appendChild(p)
        p.innerHTML = `El nombre ${input.value} tiene ${object.probability} de ser ${object.country_id}`
    }
})
