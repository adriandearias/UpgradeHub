import {Pokemon} from "./pokemon.js";
import {getPokemons} from "./api.js";

const main$$ = document.querySelector("main");
const div$$ = document.createElement('div')
main$$.appendChild(div$$)
// const mapCharacters = (characters) => {
//     return characters.map((character) => ({
//       name: character.name,
//       img: character.image,
//       series: character.amiiboSeries,
//       gameSerie: character.gameSeries,
//     }));
//   };



let pokemons = {}

function drawPokemon(pokemon) {  
    const span$$ = document.createElement("span");
    const img$$ = document.createElement("img")
    const urlImage = pokemon.sprites.other.dream_world.front_default

    div$$.appendChild(img$$)
    div$$.appendChild(span$$)

    img$$.setAttribute('src', urlImage)
    span$$.innerHTML = `${pokemon.order}.${pokemon.name}`

    console.log(pokemon.order);
    console.log(pokemon.sprites.other.dream_world.front_default);
  }

//init
const init = () => {
    getPokemons(pokemons, drawPokemon);
  };
  
  init();
  