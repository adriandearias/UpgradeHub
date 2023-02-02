// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Lista de Tareas
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const db = {
  tareas: [],
  id: 0,
};

const principal = document.querySelector("#lista-de-tareas");
const input = document.createElement("input");
const h1 = document.createElement("h1");
const btnAdd = document.createElement("button");
const ul = document.createElement("ul");

const btnArray = []

principal.appendChild(h1);
h1.innerHTML = "Lista de Tareas";
btnAdd.innerHTML = "Añadir";
principal.appendChild(input);
principal.appendChild(btnAdd);
principal.appendChild(ul);

//Style para probar
//ul.style.listStyleType = 'none';
ul.className = "lista";

// const tareas = ['comprar pan', 'echar gasolina']

// for (const tarea of tareas) {
//     const elementoTarea = document.createElement('li')
//     elementoTarea.innerHTML = tarea
//     principal.appendChild(elementoTarea)
// }

//Creamos una funcion para los 2 primeros ejercicios y no repetir codigo:

function addTarea() {
  const textoTarea = input.value;
  //trim se puede hacer sobre los strings para quitar todos los espacios
  if (textoTarea.trim() !== "" && !db.tareas.map(x=>x.texto).includes(input.value)) {
    db.id++;
    db.tareas.push({ id: db.id, texto: textoTarea, hecho: false });
    pintarTareas();
  }
  input.value = "";
  input.focus();

  //console.log(db.tareas);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ejercicio
// Añadir un evento de clic al btnAdd, para que añada una tarea a db.tareas

btnAdd.addEventListener("click", () => {
  addTarea();
});

// Añadir un evento de key-up al unput, para que cuando el usuario presione el enter
// se añada la tarea a la bbdd

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTarea();
  }
});

//crea una funcion pintarTareas() que recorra las tareas de
// la base de datos y las pinte en el ul, utilizando elementos li
// para cada tarea de la lista

function pintarTareas() {
  //limpiamos contenido de ul para que no repita al añadir al array
  ul.innerHTML = "";
  for (const tarea of db.tareas) {
    // ul.innerHTML += `
    // <li>
    //     <div>
    //         <span>${db.tareas[i]}</span>
    //         <button id="btn-d-${db.tareas[i]}">d</button>
    //         <button id="btn-x-${db.tareas[i]}">x</button>
    //     </div>
    // </li>`

    //Las dos formas de hacerlo son correctas

    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");
    const btnD = document.createElement("button");
    const btnX = document.createElement("button");

    
    span.innerHTML = tarea.texto;
    span.style.marginRight = "10px";
    //añadimos atributos a los botones para poder acceder a ellos y darle funcionalidad
    btnD.setAttribute("class", `btn-d-${tarea.id}`)
    btnX.setAttribute("class", `btn-x-${tarea.id}`)
    btnD.innerHTML = "✔️";
    btnX.innerHTML = "🗑️";

    btnX.style.marginRight = "10px";

    div.appendChild(btnD);
    div.appendChild(btnX);
    div.appendChild(span);
    li.appendChild(div);
    ul.appendChild(li);

  }
}

// En la funcion addTarea, cambiala de manera que ya no se puedan
// añadir tareas repetidas - Hecho

// Cambia pintarTareas para que tome la estructura de span+boton+boton - Hecho

//Cambia la función addTarea para que en lugar de añadir un string, añada un objeto
// {id_number, texto: string, hecha: boolean} - Hecho

//Darle funcionalidad a los botones para que borre de la lista de tareas al darle a la papelara "btnX"
//cambiar estilo en el botonD que lo cambie de hecha:true y poner texto en verde


// btnD.addEventListener('click', ()=>{
    //principal.removeChild(div)

    //div.parentNode.removeChild(div)
    //const eliminado = (div.parentNode).removeChild(div)
    //principal.appendChild(eliminado)
// })

