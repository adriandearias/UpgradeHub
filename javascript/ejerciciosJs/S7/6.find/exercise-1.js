// Dado el siguiente array, usa .find() para econtrar el número 100.

const numbers = [32, 21, 63, 95, 100, 67, 43];
const found = numbers.find(element => element === 100)
console.log(`Encontrado el número ${found} en la posición ${numbers.indexOf(100)}`);