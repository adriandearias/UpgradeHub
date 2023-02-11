//*************************** */
//         REDUCE
//*************************** */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10


const array = [1,2,3,4]

const resultado = array.reduce((acu, actual) =>{
  acu.push(actual+1)
  return acu
},[])

console.log(resultado);

//*************************** */
//         HERENCIA
//*************************** */

class Rectangulo{
  constructor(ancho, alto){
    this.ancho = ancho
    this.alto = alto
  }
  getArea(){
    return this.ancho*this.alto
  }
}

class Cuadrado extends Rectangulo{
  constructor(lado){
    //hereda de rectangulo
    super(lado, lado)
  }
}

const rect = new Rectangulo(2 ,4)
const cuadrado = new Cuadrado(2)

console.log(cuadrado.getArea());