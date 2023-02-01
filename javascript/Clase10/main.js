// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Lista de Tareas
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const db = {
    tareas:[]
}

const principal = document.querySelector('#lista-de-tareas')
const input = document.createElement('input')
const btnAdd = document.createElement('button')
btnAdd.innerHTML = 'Añadir'
const ul = document.createElement('ul')

principal.appendChild(input)
principal.appendChild(btnAdd)
principal.appendChild(ul)

// const tareas = ['comprar pan', 'echar gasolina']

// for (const tarea of tareas) {
//     const elementoTarea = document.createElement('li')
//     elementoTarea.innerHTML = tarea
//     principal.appendChild(elementoTarea)
// }

//Creamos una funcion para los 2 primeros ejercicios y no repetir codigo:

function addTarea(){
    if (!db.tareas.includes(input.value)) {
        db.tareas.push(input.value)
        pintarTareas()
    }
    input.value = ""
    input.focus()
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // Ejercicio
// Añadir un evento de clic al btnAdd, para que añada una tarea a db.tareas

btnAdd.addEventListener('click', ()=>{
        addTarea()
    })

// Añadir un evento de key-up al unput, para que cuando el usuario presione el enter
// se añada la tarea a la bbdd

input.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter'){
        addTarea()
    }
})

//crea una funcion pintarTareas() que recorra las tareas de 
// la base de datos y las pinte en el ul, utilizando elementos li 
// para cada tarea de la lista

function pintarTareas(){
    //limpiamos contenido de ul para que no repita al añadir al array
    ul.innerHTML= ""
    for (let i = 0; i < db.tareas.length; i++) {
        const elementoLista = document.createElement('li')
        elementoLista.innerHTML = db.tareas[i]
        ul.appendChild(elementoLista)
    }
}


// En la funcion addTarea, cambiala de manera que ya no se puedan
// añadir tareas repetidas

