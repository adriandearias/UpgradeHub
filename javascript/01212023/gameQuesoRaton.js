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
function esFinJuego(tableroInicial, tablero){
    const posicionQueso = getPosicionQueso(tableroInicial);
    const posicionRaton = getPosicionRaton(tablero);
    return posicionQueso === posicionRaton ? 'Fin, el ratón se ha comido el queso' : 'Aun no has encontrado el queso'
}

console.log('Posición Queso es:',getPosicionQueso(tableroJuego));
console.log('Posición Ratón es:',getPosicionRaton(tableroJuego));

function moverRaton(tablero, direccion){
    const dir = direccion.toLowerCase()
    const posRaton = getPosicionRaton(tablero)
    if (dir === 'u' && posRaton[0] > 0) {
        tablero[posRaton[0]][posRaton[1]] = ''
        posRaton[0] = posRaton[0]-1   
        tablero[posRaton[0]][posRaton[1]] = 'r'
    }else if (dir === 'd' && posRaton[0] < 2) {
        tablero[posRaton[0]][posRaton[1]] = ''
        posRaton[0] = posRaton[0]+1
        tablero[posRaton[0]][posRaton[1]] = 'r'
    }else if (dir === 'l' && posRaton[1] > 0) {
        tablero[posRaton[0]][posRaton[1]] = ''
        posRaton[1] = posRaton[1]-1
        tablero[posRaton[0]][posRaton[1]] = 'r'
    }else if (dir === 'r' && posRaton[1] < 2) {
        tablero[posRaton[0]][posRaton[1]] = ''
        posRaton[0] = posRaton[0]+1
        tablero[posRaton[0]][posRaton[1]] = 'r'
    }else{
        console.log('Warning: La orden introducida no puede ser ejecutada -> No es correcta o te sales del tablero');
    }
    return esFinJuego(tablero, posRaton)
}
console.log(moverRaton(tableroJuego, 'u'));
console.log(tableroJuego);
console.log(moverRaton(tableroJuego, 'l'));
console.log(tableroJuego);
console.log(moverRaton(tableroJuego, 'l'));
console.log(tableroJuego);
console.log(moverRaton(tableroJuego, 'l')); //tiene que devolver error, se sale del tablero
console.log(tableroJuego);
console.log(moverRaton(tableroJuego, 'u'));
console.log(tableroJuego);

