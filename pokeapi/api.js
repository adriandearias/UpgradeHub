//get 151 Pokemons(first generation)
export async function getPokemons(drawPokemons){
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
    const pokemonObj = await result.json()
    return drawPokemons(pokemonObj)
}


//"name": "bulbasaur",
// "order": 1,
// "past_types": [],
// "species": {
//   "name": "bulbasaur",
//   "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
// },
// "sprites": {
//     "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
//     "back_female": null,
//     "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
//     "back_shiny_female": null,
//     "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
//     "front_female": null,
//     "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
//     "front_shiny_female": null,
//     "other": {
//       "dream_world": {
//         "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",