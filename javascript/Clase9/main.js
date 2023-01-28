// const botonLogin = document.getElementById('boton-login')
// const inputLoginUser = document.getElementById('input-usuario');
// const inputLoginPassword = document.getElementById('input-password');

// const usuarioCorrecto = 'admin'
// const usuarioPassword = '1234'

// botonLogin.addEventListener('click',()=>{
//     if (inputLoginUser.value === usuarioCorrecto && inputLoginPassword ===usuarioPassword) {
//         console.log('LOGIN CORRECTO')
//     }else{
//         console.log('LOGIN INCORRECTO')
//     }
// })

//Haz un bucle para cambiar el texto de los botones sumandole 2
// a cada numero de boton

// for (let i = 0; i < 5; i++) {
//   const boton = document.getElementById(`boton-${i}`);
//   const partes = boton.innerHTML.split(" ");
//   const numero = Number(partes[1]);
//   const numeroSiguiente = numero + 2;
//   boton.innerHTML = `boton ${numeroSiguiente}`;
//   console.log(numeroSiguiente);
// }

// Haz un bucle para añadir un manejador de eventos a cada boton
//para que al pulsar cada boton muestre por consola 'Hola soy el boton i'

// for (let i = 0; i < 5; i++) {
//     const boton = document.getElementById(`boton-${i}`)
//     boton.addEventListener('click', ()=>{
//         console.log(`Hola soy el boton ${boton.innerHTML}`)
//     })
// }

// const boton0 = document.getElementById(`boton-0`);
// const boton7 = document.getElementById(`boton-7`);
// const boton8 = document.getElementById(`boton-8`);
// const boton9 = document.getElementById(`boton-9`);
// const boton1 = document.getElementById(`boton-1`);
// const boton2 = document.getElementById(`boton-2`);

// const arrayBotones = [boton0, boton7, boton8, boton9, boton1, boton2];
// for (const boton of arrayBotones) {
//   boton.addEventListener("click", () => {
//     console.log(`Hola soy el boton ${boton.innerHTML}`);
//   });
// }

// const divRojo1 = document.getElementById('div-rojo-1')
// const nuevoDiv = document.createElement('div')
// divRojo1.appendChild(nuevoDiv)

// nuevoDiv.setAttribute('class','verde')

// //Buscar elementos por tag
// const div = document.getElementsByTagName('div')
// console.log(div[2]);
// //Buscar elementos por clase
// const divsVerdes = document.getElementsByClassName('verde')
// console.log(divsVerdes);
// //por querySelector //devuelve el primero que encuentra
// const divRojo = document.querySelector('#div-rojo-1')
// console.log(divRojo);
// //devuelve todos en un array
// const divsRojos = document.querySelectorAll('.verde')
// console.log(divsRojos);

// const inputUser = document.querySelector('div')

/**
 * Inserta dentro del div 'mi-div' un input un boton y haz que al pulsar ese boton
 * muestre el valor del input
 */

// const miDiv = document.getElementById("mi-div");
// const input = document.createElement("input");
// const boton = document.createElement("button");
// miDiv.appendChild(input);
// miDiv.appendChild(boton);

// boton.innerHTML = "test";

// boton.addEventListener("click", () => {
//   console.log(input.value);
// });

/**
 * Recrea el ejercicio del login pero haciendolo todo de manera dinamica
 * desde JS
 */
// const botonLogin = document.getElementById('boton-login')
// const inputLoginUser = document.getElementById('input-usuario');
// const inputLoginPassword = document.getElementById('input-password');

// const usuarioCorrecto = 'admin'
// const usuarioPassword = '1234'

// botonLogin.addEventListener('click',()=>{
//     if (inputLoginUser.value === usuarioCorrecto && inputLoginPassword ===usuarioPassword) {
//         console.log('LOGIN CORRECTO')
//     }else{
//         console.log('LOGIN INCORRECTO')
//     }
// })

// const usuarioCorrecto = 'admin'
// const usuarioPassword = '1234'

// const miDiv = document.getElementById("mi-div");
// const botonLogin = document.createElement("button");
// const inputUsuario = document.createElement("input")
// const inputPassword = document.createElement("input")

// miDiv.appendChild(inputUsuario);
// miDiv.appendChild(inputPassword);
// miDiv.appendChild(botonLogin);

// botonLogin.innerHTML = "Login";

// botonLogin.addEventListener('click',()=>{
//     if (inputUsuario.value === usuarioCorrecto && inputPassword.value ===usuarioPassword) {
//         console.log('LOGIN CORRECTO')
//     }else{
//         console.log('LOGIN INCORRECTO')
//     }
// })

// miDiv.innerHTML = `<input id="input-user">`
// miDiv.innerHTML += `<input id="input-pass">`
// miDiv.innerHTML += `<button id="btn-login>Test</button>"`

//miDiv.innerHTML = `<input value="valor por defecto">`
//miDiv.innerHTML += `<div class ="rojo"> </div>`
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                //CALCULADORA
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const div = document.querySelector('#calculadora')
// div.innerHTML += `<input id="input-calculadora" placeholder="introduce una cuenta">`

// const simbolos = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/']

// for (const simbolo of simbolos) {
//     div.innerHTML += `<button id="btn-${simbolo}">${simbolo}</button>`
// }

// div.innerHTML += `<button id="btn-calcular">=</button>`

// const input = document.querySelector('#input-calculadora')

// for (const simbolo of simbolos) {
//     const boton = document.getElementById(`btn-${simbolo}`)
//     boton.addEventListener('click',()=>{
//         input.value += simbolo
//     })
// }

// const btnCalcular = document.querySelector('#btn-calcular')
// btnCalcular.addEventListener('click', ()=>{
//     const expresion = input.value
//     input.value = eval(expresion)
// })

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                //TABINDEX
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* <p>Click anywhere in this pane, then try tabbing through the elements.</p>
<label>First in tab order:<input type="text"></label>
<div tabindex="0">Tabbable due to tabindex.</div>
<div tabindex="-1"></div>
<label>Third in tab order:<input type="text"></label> */

// const divRojo = document.querySelector('.rojo')
// const divVerde = document.querySelector('.verde')

// divRojo.addEventListener(click, ()=>{
//     console.log('hola');
// })

// divRojo.addEventListener(click, (event)=>{
//     console.log('adios');
//     event.stopPropagation()
// })


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Ejercicio
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/**
 * Crea un div verde, y crea 4 botones (arriba, abajo, derecha, isquierda)
 * que al pulsar cada uno de los botones, mueva ese div, 1 pixel a la posicion 
 * pulsada
 * style left y top
 */

//crear div verde y añadirlo al body
// crear botones de movimiento

const div = document.createElement('div')
const direcciones = ['Arriba','Derecha','Abajo','Izquierda']


for (let i = 0; i < direcciones.length; i++) {
    let boton = document.createElement("button");
    document.body.appendChild(boton);
    boton.innerHTML = direcciones[i]
    boton.setAttribute('class',  direcciones[i].toLowerCase())
}

document.body.appendChild(div);
div.className =  'verde'

// añadir eventos a botones
// mover el div
const botones = document.querySelectorAll('button')
console.log(botones);
//top y left
let y = 0;
let x = 0;
for (const boton of botones) {
    boton.addEventListener('click',()=>{
        switch(boton.className){
            case 'arriba':
                y--
                boton.style.backgroundColor = 'purple'
                div.style.top = `${y}px`
                div.style.backgroundColor = 'purple'
                break;
            case 'derecha':
                x++
                boton.style.backgroundColor = 'red'
                div.style.left = `${x}px`
                div.style.backgroundColor = 'red'
                break;
            case 'abajo':
                y++
                boton.style.backgroundColor = 'blue'
                div.style.top = `${y}px`
                div.style.backgroundColor = 'blue'
                break;
            case 'izquierda':
                x--
                boton.style.backgroundColor = 'orange'
                div.style.left = `${x}px`
                div.style.backgroundColor = 'orange'
                break;
        }
    })
}


