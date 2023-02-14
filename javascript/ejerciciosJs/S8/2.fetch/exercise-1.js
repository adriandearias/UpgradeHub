// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() 
// y recibir los datos que devuelve. Imprimelo mediante un console.log(). 
// Para ello, es necesario que crees un .html y un .js.

async function getMichael(){
    const getData = await fetch(`https://api.agify.io?name=michael`)
    const objData = await getData.json()
    console.log(objData); 
}

getMichael()