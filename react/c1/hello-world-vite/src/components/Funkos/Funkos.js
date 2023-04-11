export const initFunkos = () => {
    console.log('Hola Funkos');
    const app = document.querySelector("#app");
    app.innerHTML = '';
    peticion();
}

const peticion = async (cantidad) => {
    const resultado = await fetch("https://back-funkos.vercel.app/api/v1/funkos");
    const funkos = await resultado.json();
    pintar(funkos);
}

const pintar = (arrayFunko) => {
    const app = document.querySelector('#app');
    for (const funko of arrayFunko) {
        app.innerHTML += `
            <div>
                <img src="${funko.imagen}" /> 
            </div>
        `
    }
}