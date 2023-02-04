/**
 * Crea una funcion: estadoCieloToEmoji:
 * que dado un estado de cielo nos devuelva 
 * el emoji correspondiente
 */

export function estadoCieloToEmoji(estado) {
    let estadoEmoji = '';
    switch(estado){
        case 'soleado':
            estadoEmoji = '☀️'
            break;
        case 'nublado':
            estadoEmoji = '☁️'
            break;
        case 'lluvioso':
            estadoEmoji = '🌧️'
            break;
    }
    return estadoEmoji
}
