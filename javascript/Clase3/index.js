const persona = {
    id: 1,
    nombre: 'Adrian',
    tfno: '666222333',
    edad: 30
}
//console.log(`${persona.nombre} ${persona.tfno}`);
//console.log(persona);

const persona2 = {}
persona2.nombre = persona.nombre
persona2.tfno = persona.tfno
persona2.edad = persona.edad
//console.log(persona2);

//nuevo bucle para recorrer y asignar propiedades de objetos

for(const clave in persona){
    if (clave !== 'id' && clave !== 'nombre' ) {
        persona[clave] = persona2[clave];
    }
    
}
//console.log(persona2);

// DADO EL SIGUIENTE OBJETO, BUSCA LA ASIGNATURA QUE TENGA LA MAXIMA NOTA
const notas ={
    mates: 4,
    lengua: 6,
    ingles: 9,
    ciencias: 8
}
let asignaturaMax = "mates"; //estamos hardcodeando la clave asignandola asi, la forma correcta seria "Object.keys(notas)[0]"

for (const clave in notas){
    if(notas[clave]>notas[asignaturaMax]){
        asignaturaMax = clave;  
    }
}

//console.log(`La nota más alta es de ${asignaturaMax}`);

//FUNCIONES NUEVAS
//Hay funciones que tambien funcionan tanto en strings como en arrays, por ejemplo, a un string no podemos acceder por posición si hacemos:
// soyUnString= "Hola soy paco" para acceder a la "H" deberíamos ir a la posición soyUnString[0] = A <--- esto es invalido ya que no podemos reemplazar en string por posiciñon

//funcion includes -> con esta funcion podemos recorrer tanto un string como un array para ver si contiene un caracter en una posicion determinada

const numeros = [1,2,3,4,5,6]
const numerosStr = "123456"

const existeEl2 = numeros.includes(4) //nos recorrerá el array buscando el 4
console.log(existeEl2); // nos devuelve true
const existeEl2Str = numerosStr.includes('2');
console.log(existeEl2Str); //Nos devuelve true ya que en el string tenemos el 2 en una de las posiciones de la cadena 
//IMPORTANTE -> SI EL PARAMETRO QUE LE PASAMOS ES UN 2 NUMERICO, LA FUNCION INCLUDES NO DIFFERENCIARA ENTRE STRING Y NUMBER YA QUE NO ES ESCTRICTO ES ->  !== Y NO -> !=== (ESTRICTAMENTE ESTRICTO)





























