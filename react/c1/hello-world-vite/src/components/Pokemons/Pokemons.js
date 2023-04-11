const POKEMONS = []

export const initPokemons = () => {
    console.log('Hola Pokemons');
    const app = document.querySelector("#app");
    app.innerHTML = '';
    peticion(20);
}

const peticion = async (cantidad) => {
    for (let i = 1; i < cantidad; i++) {
        const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/"+i);
        const pokemon = await resultado.json();
        POKEMONS.push(pokemon);
    }

    pintar(POKEMONS);
}

const pintar = (arrayPoke) => {
    const app = document.querySelector('#app');
    for (const poke of arrayPoke) {
        app.innerHTML += `
            <div>
                <h2>${poke.name}</h2>  
            </div>
        `
    }
}