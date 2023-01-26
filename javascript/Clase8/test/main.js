const botonSaludar = document.getElementById('boton-saludar')
const inputTexto = document.getElementById('input-texto')
const botonLimpiar = document.getElementById('boton-limpiar')

// hacer que el contador aumente +1 cada vez que el usuario haga clic
// mostrar el valor del contador cada vez que el usuario haga clic también

let contadorClics = 0;
botonSaludar.addEventListener('click',()=>{
    contadorClics++;
    console.log('Botón Pulsado');
    console.log(contadorClics);
})

botonSaludar.innerHTML = '000'

//añade al botonSaludar un escuchador de evento 'click'
//que muestre el contenido del texo del boton pulsado

botonSaludar.addEventListener('click',()=>{
    console.log(botonSaludar.innerHTML);
})

botonSaludar.addEventListener('click',()=>{
    console.log(inputTexto.value);
    inputTexto.value = '^^^^^^^^^^'
})

//añade un boton nuevo al HTML que tenga como titulo 'limpiar'
//añadele un evento a ese boton, para que limpie el texto del input

botonLimpiar.addEventListener('click',()=>{
    console.log(inputTexto.value);
    inputTexto.value = ''
})

//Ejercicio
const usuarioCorrecto = 'admin'
const usuarioPassword = '1234'
/**
 * Al hacer click en el boton login, comprobar si los valores de los campos
 * coinciden con las credenciales correctas
 * en caso de que:
 * SI -> mostrar console.log('LOGIN CORRECTO')
 * NO -> mostrar console.log('LOGIN INCORRECTO') 
*/