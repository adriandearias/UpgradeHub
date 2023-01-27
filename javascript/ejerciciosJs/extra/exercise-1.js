// Crea una función llamada splitName que divida un nombre completo en nombre y apellido.
// Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.
// De tal modo que si tenemos el texto "Sylvester Stalone" obtendremos dos variables...
// una con el valor "Sylvester" y otra con el valor "Stalone".
// En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()

let firstName = ''
let secondName = ''

function splitName(stringNombre){
    const fullName = stringNombre.split(' ')
    // El enunciado es un poco lioso, utilizo dos variables para guardar nombre y apellido
    firstName = fullName[0]
    secondName = fullName[1]
    // como no puedo devolver 2 variables utilizando la funcion split generamos un array con nombre y apellido
    //utilizando de patron el espacio que los separa y devolvemos array con 2 elementos
    return fullName
}

console.log(splitName('Sylvester Stalone'));
console.log(firstName, secondName);

