// Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y 
// simule un disparo de la primera nave a la segunda.
// Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave 
// y le restará el  resultado al valor de la propiedad `.pv` de la segunda nave.
// Ejecuta la función tantas veces como quieras.

const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

function attack(nave1, nave2){
    let disparo = Math.round(Math.random() * (ship1.damage - 1) + 1);
    //nave 1 dispara a nave2
    console.log('Potencia disparo ->' ,disparo);
    return ship2.pv - disparo 
}

console.log(attack(ship1, ship2));