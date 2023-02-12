//@import modules
import {Pokemon} from "./pokemon.js";
import {getPokemons} from "./api.js";

//Global variable declaration
const arrayPokemons = [];
const divContent$$ = document.querySelector('.div-content')

//function map

function drawPokemons(arrayPokemons) {  
    for (const pokemon of arrayPokemons) {
      const img$$ = document.createElement("img");
      const span$$ = document.createElement("span");
      divContent$$.appendChild(img$$)
      img$$.setAttribute('src', pokemon.sprites.other.dream_world.front_default)
      img$$.setAttribute('class', 'img-pokemon')
    }
    return console.log(arrayPokemons);


  //   <figure>
  //               <img src="http://assets.climatecentral.org/images/made/3_16_16_upton_paris_720_405_s_c1_c_c.jpg" >
  //               <figcaption>Fig.1 - París de noche (Enero de 2016)</figcaption>
  //           </figure>

  // }
}

// const findPokemon = ()=>{
//   const filteredPokemons = ''
// }

//init
const init = async () => {
    await getPokemons(arrayPokemons, drawPokemons);
    window.addEventListener('DOMContentLoaded', () => {});
    console.log('DOM fully loaded and parsed');
    //console.log(arrayPokemons[0].sprites.other.dream_world.front_default);
  };
  
  init();
  