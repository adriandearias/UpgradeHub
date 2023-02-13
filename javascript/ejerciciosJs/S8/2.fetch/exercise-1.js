// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() 
// y recibir los datos que devuelve. Imprimelo mediante un console.log(). 
// Para ello, es necesario que crees un .html y un .js.

async function getMichael(){
    const result = await fetch(`https://api.agify.io?name=michael`)
    const resultToObject = await result.json()
    console.log(resultToObject); 
}

getMichael()