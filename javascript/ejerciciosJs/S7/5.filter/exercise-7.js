// Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la
// palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer
//'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input$$ = document.querySelector("[data-function]");
//let temporizadorBusqueda = null;

input$$.addEventListener("keyup", () => {
    console.log('Estoy filtrando!');
    let inputFilter = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()));
    inputFilter.map(input => console.log(input.name))
})

//Con setTimeout:

// let temporizadorBusqueda = null;

// input$$.addEventListener("keyup", () => {
//   // si el tempo esta activo
//   if (temporizadorBusqueda) {
//     //lo paro
//     clearTimeout(temporizadorBusqueda);
//   }
//   setTimeout(() => {
//     console.log('Estoy filtrando!');
//     let inputFilter = streamers.filter(streamer => streamer.name.toLowerCase().includes(input$$.value.toLowerCase()));
//     console.log(inputFilter);
// }, 3*1000);
// });