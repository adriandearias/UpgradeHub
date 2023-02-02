// -------------------------------
//      HUNDIR LA FLOTA
// -------------------------------
//

/**
 * funcion generarTablero
 * @param numFilas
 * @param numColumnas
 * @param caracterRelleno
 * @return tablero
 */

function generarTablero(numFilas, numColumnas, caracterRelleno){
    const tablero = []
    for (let i = 0; i < numFilas; i++) {
        // nueva fila
        const fila = []
        for (let j = 0; j < numColumnas; j++) {
            //Elementos Fila(Columna)
            fila.push(caracterRelleno)
        }
        tablero.push(fila)
    }
    return tablero;
}

/**
 * acción -> funcion mostrarTablero
 * @param tablero
 * @return void (vacio, no devuelve nada)
*/

function mostrarTablero(tablero){
    for (let i = 0; i < tablero.length ; i++) {
        console.log(tablero[i]);
    }
    console.log('');
}

/**
 * funcion rellenarPoisicion
 * que dado un tablero, una posición y un caracter de relleno, pinte ese valor
 * @param tablero
 * @param posicion {x: number, y: number}
 * @param caracterRelleno 
 * @return void
 */

function rellenarPosicion(tablero, posicion, caracterRelleno){
    tablero[posicion.x][posicion.y] = caracterRelleno
}

/**
 * funcion obtenerCaracterEnPosicion
 * obtenerCaracterEnPosicion
 * @param tablero
 * @param posicion {x: number, y: number}
 * @return caracter
 */

function obtenerCaracterEnPosicion(tablero, posicion){
    return tablero[posicion.x][posicion.y]
}

/**
 * acción -> funcion colocarBarcoAleatorio
 * usando la funcion obtenerRandomEntre
 * los barcos usan el caracter = 'B' y solo tienen 1 pieza
 * @param tablero
 * return void
 */

function obtenerRandomEntre(min, max){
    return Math.round(Math.random() * (max - min) +min)
}

function colocarBarcoAleatorio(tablero){
    const pos ={x: 0, y: 0}
    pos.x = obtenerRandomEntre(0, tablero.length-1)
    pos.y = obtenerRandomEntre(0, tablero[0].length-1)
    rellenarPosicion(tablero, pos, 'B')
}

/**
 * funcion colocarMuchosBarcos
 * utiliza un bucle y la funcion anterior para colocar tantos barcos como sea necesario
 * @param tablero
 * @param cuantos
 * @return void
 */

function colocarMuchosBarcos(tablero, cuantos){
    for (let i = 0; i < cuantos; i++) {
        colocarBarcoAleatorio(tablero);
    }
}

/**
 * funcion disparar
 * si ha tocado un barco, y en caso de tocarlo, cambia la 'B' por la 'X'
 * @param tablero :string[][]
 * @param posDisparo {x: number, y:number}
 * @return tocado: boolean
 */

function disparar(tablero, posDisparo){
    if(obtenerCaracterEnPosicion(tablero, posDisparo) === 'B'){
        rellenarPosicion(tablero, posDisparo, 'X')
        return true
    }else{
        return false
    }

}

const tablero = generarTablero(3, 3, ' ');
const posicionObj = {x: 0, y: 0}
mostrarTablero(tablero);
rellenarPosicion(tablero, posicionObj, 'X');
mostrarTablero(tablero);
console.log(obtenerCaracterEnPosicion(tablero, {x: 0, y: 0}));
colocarBarcoAleatorio(tablero);
mostrarTablero(tablero);
colocarMuchosBarcos(tablero, 3);
mostrarTablero(tablero);
console.log(disparar(tablero, {x: 0, y: 0}));
mostrarTablero(tablero);