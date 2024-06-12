// "Crea un bucle para conseguir dormir contando ovejas. Este bucle empieza en 0 y termina en 10. Muestra por consola un mensaje diciendo
//  'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la última vuelta a 'Dormido!'."

for (let index = 0; index < 10; index++) {
  let resp = "Intentando dormir";
  if (index < 9) {
    console.log(index+1, "-" ,resp);
  }else{
    console.log(resp=index+1, " - Dormido!");
  }
  
}