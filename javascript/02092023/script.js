
// const json = `{"nombre": "oscar"` //falta un corchete y devolvera err
// try{
//   //codigo suceptible a fallar
//   const obj = JSON.parse(json)
//   console.log(obj);
// }catch(err){
//   //codigo que se ejecutará
//   //cuando falle el código del try
//   console.log(err);
// }

// document.getElementById('btn-fetch').addEventListener('click', async ()=>{
//   const valorInput = document.getElementById('input').value
//   let obj = null
//   try{
//     const result = await fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${valorInput}`)
//     obj = await result.json()
//   } catch(error){
//     console.log('ERROR ->' ,error);
//   }
//   if (obj) {
//     console.log(obj.estadoCielo);
//   }else{
//     console.log('No existen los datos del clima');
//   }
// })

const db = {
  logs: [
    {id: 1, text: 'Error en la base de datos', date:'22:47'},
    {id: 2, text: 'Error en el formulario', date:'22:48'},
    {id: 3, text: 'Error en impresora', date:'22:49'},
  ]
}

const divLogs = document.getElementById('div-logs') 
const input = document.querySelector('input')
let temporizadorBusqueda = null

input.addEventListener('keyup', ()=>{
  // si el tempo esta activo
  if(temporizadorBusqueda){
  //lo paro
    clearTimeout(temporizadorBusqueda)
  }
  setTimeout(()=>{
    console.log('estoy filtrando');
    pintarLogs(db.logs.filter(x=>x.text.toLowerCase().includes(input.value.toLowerCase())))
  }, 0.5*1000)
})




function pintarLogs(logsFiltrados){
  divLogs.innerHTML = ''    
  const tabla = document.createElement('table')
  // crear cabecera (thead)    
  const cabecera = document.createElement('thead')
  const filaCabecera = document.createElement('tr')
  const thId = document.createElement('th')
  const thText = document.createElement('th')
  const thDate = document.createElement('th')
  thId.innerText = "ID"    
  thText.innerText = "TEXT"    
  thDate.innerText = "DATE"    
  filaCabecera.appendChild(thId)
  filaCabecera.appendChild(thText)
  filaCabecera.appendChild(thDate)
  cabecera.append(filaCabecera)
  // crear cuerpo (tbody)    
  const cuerpo = document.createElement('tbody')

  for(const log of logsFiltrados){
      const filaLog = document.createElement('tr')
      const tdId = document.createElement('td')
      const tdText = document.createElement('td')
      const tdDate = document.createElement('td')
      tdId.innerText = log.id        
      tdText.innerText = log.text        
      tdDate.innerText = log.date        
      filaLog.appendChild(tdId)
      filaLog.appendChild(tdText)
      filaLog.appendChild(tdDate)
      cuerpo.appendChild(filaLog)
  }
  tabla.appendChild(cabecera)
  tabla.appendChild(cuerpo)
      // bucle para crear filas (tr)    
  divLogs.appendChild(tabla)
}
//thead > tr > th 
// tbody > tr > td (comun1)  td (comun2)

pintarLogs(db.logs)

let contador = 0
const intervalo = setInterval(()=>{
  if (contador<4) {
    console.log('hola');
    contador++;
  }else{ clearInterval(intervalo)}

}, 1500)

//genera un interval que cada 1/10s desplace un pixel la tabla de logs hacia abajo
const table = document.querySelector('table')
let styleTop = 10
const intervaloPixel = setInterval(()=>{
    table.style.top = `${styleTop + 1}px`
    styleTop++
    if (styleTop===40) {
      clearInterval(intervaloPixel)
    }
}, 100)