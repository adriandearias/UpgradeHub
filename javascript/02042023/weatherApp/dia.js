export class Dia{
    constructor(diaSemana, temp, hum, estadoCielo){
        this.diaSemana = diaSemana
        this.temperatura = temp
        this.humedad = hum
        this.estadoCielo = estadoCielo
    }
    getHumedadStr(){
        let tipoHumedad = ''
        if (this.humedad<30) {
            tipoHumedad = 'Humedad baja'
        }else if(this.humedad>= 30 && this.humedad <60){
            tipoHumedad = 'Humedad media'
        }else if(this.humedad>=60){
            tipoHumedad = 'Mucha humedad'
        }else{
            tipoHumedad = 'Valor incorrecto'
        }
        return tipoHumedad;
    }
}

//Añadir funcion a clase dia que depeniendo de la humedad
// del dia nos salga un texto:
/**
 * <30 'humedadBaja'
 * >= 30 y <60 'humedad media'
 * >= 60 'mucha humedad'
 */