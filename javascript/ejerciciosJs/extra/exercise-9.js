// vamos a tener que hacer una función la cual reciba un array,
// os dejamos un array por aquí por si no estais inspirados y con ese array que recibe,
// teneis que envolver con asteriscos cada string y darles un salto de linea. 
// Mas abajo esta la devolución de como deberia de quedar.


const frutas = ['pera', 'manzana', 'tomate' ,'piña','naranja']
/* [
  "*****\n*pera*\n*****",
  "******\n*manzana*\n******",
  "*******\n*tomate*\n*******"
] */


for (let i = 0; i < frutas.length; i++) {
  frutas[i] = `*****$\n*${frutas[i]}*\n*****`
}

console.log(frutas);
