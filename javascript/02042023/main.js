// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Clase 04 de Febrero de 2023 - Definiendo clases
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//import {sum} from './functions.js'
import {Tarea} from './tarea.js'

// class Rectangle {
//   constructor(height, width, color) {
//     this.height = height;
//     this.width = width;
//     this.color = color;
//   }

//   getArea() {
//     return this.height * this.width;
//   }

//   esMismoColor(otroRectangulo) {
//     return this.color === otroRectangulo.color;
//   }

//   setColor(color) {
//     this.color = color;
//   }
// }

// const rectangulo1 = new Rectangle(3, 6, "green");
// const rectangulo2 = new Rectangle(2, 4, "blue");

// console.log(rectangulo1.getArea());
// console.log(rectangulo1.esMismoColor(rectangulo2));

//Crea un metodo de clase setColor, que reciba un color y se lo cambie
// al objeto que esta invocando el metodo

// rectangulo1.setColor("red");
// console.log(rectangulo1.color);

//crea una clase tarea, que en el constructor reciba id texto y hecha y construya la tarea

// class Tarea {
//   constructor(id, texto, hecha) {
//     this.id = id;
//     this.texto = texto;
//     this.hecha = hecha;
//   }
// }

// const tarea1 = new Tarea(1, "Sacar al paerro", false);

//Modificando toDoList con Class

let db = {
  tareas: [],
  id: 0,
};

document.addEventListener('DOMContentLoaded', ()=>{
  const dbGuardado = JSON.parse(localStorage.getItem('lista'))
  if(dbGuardado){
    db=dbGuardado
    pintarTareas()
  }
})

const principal = document.querySelector('#lista-de-tareas')

const input = document.createElement("input");
const btnAdd = document.createElement("button");
const ul = document.createElement("ul");
ul.className = "lista";
btnAdd.innerHTML = "Añadir";

principal.appendChild(input);
principal.appendChild(btnAdd);
principal.appendChild(ul);

/** * Ejercicio: cambia la función addTarea, para que en lugar de añadir * un string, añada un objeto {id:number, texto: string, hecha: boolean} */
function addTarea() {
  const textoTarea = input.value.trim();
  if (
    textoTarea !== "" &&
    !db.tareas.map((x) => x.texto).includes(textoTarea)
  ) {
    db.id++;
    db.tareas.push(new Tarea(db.id,textoTarea,false));
    pintarTareas();
  }
  input.value = "";
  input.focus();
  guardarCambios()
  console.log(db.tareas);
  
}

/** * Ejercicio: añadir un evento de clic al btnAdd, para que  * añada una tarea a db.tareas * una vez añadido, limpiar el input */
btnAdd.addEventListener("click", function () {
  addTarea();
});

/** * Ejercicio: añadir evento de keyup al input, para que  * cuando el usuario pulse el enter, se añada la tarea a * la db */

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTarea();
  }
});

/** * crea una función pintarTareas() que recorra las tareas de * la base de datos y las pinte en el ul, utilizando elemntos * li para cada tarea de la list */
function pintarTareas() {
  // limpiar contenido del ul
  ul.innerHTML = "";
  for (const tarea of db.tareas) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.className = "texto-tarea";
    const btnHecho = document.createElement("button");
    const btnEliminar = document.createElement("button");
    btnHecho.innerHTML = "✔️";
    btnEliminar.innerHTML = "🗑️";
    span.innerHTML = tarea.texto;
    btnEliminar.addEventListener("click", () => {
      eliminarTarea(tarea, li);
    });
    btnHecho.addEventListener("click", () => {
      hacerTarea(tarea, span);
    });
    div.appendChild(btnHecho);
    div.appendChild(btnEliminar);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);
  }
}
function eliminarTarea(tarea, li) {
  console.log(tarea);
  db.tareas = db.tareas.filter((t) => t.id !== tarea.id);
  // eliminar del html
  ul.removeChild(li);
  guardarCambios()
}
function hacerTarea(tarea, span) {
  // cambios en bd
  if (tarea.hecha) {
    tarea.hecha = false;
    span.classList.remove("hecha");
  } else {
    tarea.hecha = true;
    span.classList.add("hecha");
  }
  guardarCambios()
}

function guardarCambios(){
  localStorage.setItem('db', JSON.stringify(db))
}