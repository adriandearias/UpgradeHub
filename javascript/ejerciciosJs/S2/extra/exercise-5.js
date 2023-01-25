// Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
// que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
// una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
// información sobre la función de javascript ``Math.random()``

function rollDice(side){
    return Math.round(Math.random() * (side - 1) + 1);
}
//Ponemos como valor mínimo en el algoritmo 1 y de max el parámetro side = 6 
//en este caso para que devuelva valores de 1 a 6 incluidos al llamar la funcion.
console.log(rollDice(6));