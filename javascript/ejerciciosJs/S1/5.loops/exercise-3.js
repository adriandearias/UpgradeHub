//Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'.

for (let index = 0; index < 11; index++) {
    console.log("Intentando Dormir " +index)
    if(index==10){
        console.log("Dormido")
    }
}