//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let contador = 0;

for (const animal of animals) {
    for (let i = 0; i < animal.length; i++) {
        if (animal[i] === 'a' || animal[i] === 'A') {
            contador++
        }
    }
}

console.log(`En el array -> [${animals}] hay ${contador} letras "a"`);