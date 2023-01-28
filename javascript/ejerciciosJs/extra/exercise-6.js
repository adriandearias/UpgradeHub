// Al siguiente javascript no funciona como deberia...podrias arreglarlo?
// Deberia de imprimir por consola "elGato".


const user = {name: "elGato", surname: "ConZancos"}

function a(user){
    const nama = b(user.name);
}

function b(name){
    console.log(name)
}

a(user);
