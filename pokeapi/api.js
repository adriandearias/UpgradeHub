//get 151 Pokemons(first generation)
export async function getPokemons(arrayPokemons, drawPokemons){
    for (let i = 1; i < 152; i++) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const pokemonResultToObject = await result.json()   
        arrayPokemons.push(pokemonResultToObject)  
        console.log(pokemonResultToObject);  
    }
    return drawPokemons(arrayPokemons)
}
