// # Español
// Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. 
// La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo 
// de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt.
//  La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función 
//  callback (confirmExample o promptExample).
// La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado
//  que retorne la función al array userAnwsers.
// Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers


const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    userAnwsers.push(`${description} ${callback(description)}`)
}

// const confirmValue = confirm('Soy un texto en confirm()');
// const promptValue = prompt('Soy un texto en prompt()');

father('¿Quieres acabar el ejercicio?', confirmExample)
father('Pulsa ok o cancelar', confirmExample)
father('Introduce un número: ', promptExample)
father('¿Te ha costado entender el ejercicio?', promptExample)
console.log(userAnwsers);


// Resultado consola:

// (4) ['¿Quieres acabar el ejercicio? true', 'Pulsa ok o cancelar true', 'Introduce un número:  a', '¿Te ha costado entender el ejercicio? a']
// 0: "¿Quieres acabar el ejercicio? true"
// 1: "Pulsa ok o cancelar true"
// 2: "Introduce un número:  a"
// 3: "¿Te ha costado entender el ejercicio? a"
// length: 
// 4