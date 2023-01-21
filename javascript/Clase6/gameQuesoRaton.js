const tableroInicial = [
    ['q', '', ''],
    ['', '', ''],
    ['', '', 'r']
]
const tableroJuego = [
    ['q', '', ''],
    ['', '', ''],
    ['', '', 'r']
]
/** direcciones: 
 * 'u' -> arriba -> up
 * 'd' -> abajo -> down
 * 'l' -> izquierda -> left
 * 'r' -> derecha -> right */

/** *  moverRaton(tablero,direccion) -> dada una dirección, cambia la posicion del raton    
 * getPosicionRaton(tablero) -> funcion que devuelva la posición actual del ratón    
 * getPosicionQueso(tablero) -> funcion que devuelva la posición del queso    
 * finJuego(tableroInicial, tableroFinal) -> si la posicion del raton coincide con la posición del queso */

/**
 * @param tablero
 * @return posicion: array de dos elementos
 */

function getPosicion(tablero, caracterBusqueda){
    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] === caracterBusqueda) {
               return [i,j] 
            }
        }
    }
}

function getPosicionRaton(tablero){
    return getPosicion(tablero, 'r')
}

function getPosicionQueso(tablero){
    return getPosicion(tablero, 'q')
}

/**
 * esFinJuego
 * @param array tableroInicial foto inicial
 * @param array tableroJuego foto final 
*/
function esFinJuego(tableroInicial, tableroFinal){
    const posicionQueso = getPosicionQueso(tableroInicial);
    const posicionRaton = getPosicionRaton(tableroFinal);
    return posicionQueso[0] === posicionRaton[0] && posicionQueso[1] === posicionRaton[1] ? true : false
}

console.log(getPosicionQueso(tableroJuego));
console.log(getPosicionRaton(tableroJuego));

function moverRaton(tableroFinal, direccion){
    if (direccion === 'd') {
        
    }
}

console.log(moverRaton());

console.log(esFinJuego(tableroInicial, tableroJuego));
