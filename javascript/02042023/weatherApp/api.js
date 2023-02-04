//promesas vs async-await


//promesas

export function getClimaPorDiaSemana(dia, cb){
    //llamada api
    fetch(`https://meteo-de-oscar.proxy.beeceptor.com/${dia}`)
    .then(function (resultado){
        resultado.json()
        .then(function(diaObj){
            cb(diaObj)
        })
        .catch(function(err){
            console.log(dia, err);
        })
    })
    .catch(function (err){
        console.log(err);
    })

}


//async-await

