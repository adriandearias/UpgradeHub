const persona = {
    nombre: "pepe", 
    edad: 30, 
    email: "pepe@gmail.com", 
    email2: "pepe@hotmail.com"
}

const persona2 = {
    nombre: "juan", 
    edad: 28, 
    email: "juan@gmail.com", 
    email2: "juan@hotmail.com",
    //Array anidable, objeto dentro de un objeto
    direccion: {
        calle: "Alcala",
        portal: "2",
        piso: {
            altura: 6,
            letra: "B"
        }
    }
}

persona2.direccion.calle.altura = 2;
console.log(persona2);

//Añadir dimensión/clave a objeto
persona["tfno"] = "+34623444333"

//Igual que la anterior pero mas sencilla
persona.dirección = "Calle Alcala"

//cambiar tipo valor
let x= 2;
x.toString();
console.log(x); 

console.log(persona);

//Quitar dimensión/clave a objeto (no se suiele utilizar)
//delete persona["tfno"]

console.log(persona)

//Los textos se concatenan de esta forma, los ""+
//acento cerrado no comilla simple
console.log(`${persona2.nombre} ${persona.nombre}`)



//ARRAY
const arrayName =[8, 5, 10, 4, 7];
console.log(arrayName[1]);

//Podemos meter el objeto en array:
const arrayObject = [persona2];
console.log(arrayObject[0].nombre);


//BUCLES

// for of - cuando no interesa la posicion
    //  for (const /individuo/ of /colectivo/)

//for let i - cuando interesa la posicion
    //for (let /posicion/ = 0; /posicion/ < /colectivo.lengfth/; posicion++)

/**  while - equivalente al for let i
    let /posicion/ = 0
    while(/posicion/ < /colectivo.length/)
*/

const array = [1,2,3,4,5,6,7,8];
const suma = array[0]+array[1]+array[2]; //no es óptimo

for (const individuo of array){
    console.log(individuo)
}

for(let posicion = 0; posicion < array.length; posicion++){
    console.log(array[posicion]);
}

//SUMA BUCLE
let acumulador = 0;
for(const numero of array){
    acumulador = acumulador + numero; 
}

console.log(acumulador);

//Encontrar un numero

let encontrado = false;
for (const num of array){
    if(num == 2){
        encontrado = true;
        break
    }
}

//Buscar la posicion de un numero
let posicionEncontrada = -1;
for(let i=0; i<array.length; i++){
    if(array[i] == 2){
        posicionEncontrada = i
        break
    }
}

while(i<array.length()){
    if(numeros[i]==2){
        posicionEncontrada = i
        break
    }
    i++
}







