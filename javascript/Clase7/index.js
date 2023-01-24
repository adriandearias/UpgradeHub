// -------------------------------
//       function math.random()
// -------------------------------
// Devuelve un numero de coma flotante aleatorio entre 0 y <1

function obtenerRandomEntre(min, max){
  return Math.ceil(Math.random() * (max - min) +min)
}

//console.log(obtenerRandomEntre(10,30));

// -------------------------------
//     Ejercicio 1
// -------------------------------
//Genera un boleto con un número del 10 al 30 (incluidos) y ejecuta la funcion obtenerRandomEntre, 100 veces (for)
//o hasta que encuentres el resultado de tu boleto
//Si encuentras el noleto, muestra por consola: GANADOR
//Si no lo encuentras tras 100 tiradas, muestra: PERDEDOR

const boleto = 22

for (let i = 0; i < 100; i++) {
  if (obtenerRandomEntre(10,30) === boleto) {
    console.log('GANADOR', +i);
  }else{
    console.log('PERDEDOR');
  }
}
