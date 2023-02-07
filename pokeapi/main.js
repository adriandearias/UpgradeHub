import {Pokemon} from "./pokemon.js";
import {getPokemons} from "./api.js";

const main$$ = document.querySelector("main");
const div$$ = document.createElement('div');
main$$.appendChild(div$$)


function drawPokemons(pokemonObj) {  
    const span$$ = document.createElement("span");
    const img$$ = document.createElement("img")
    const urlImage = pokemonObj
    //.sprites.other.dream_world.front_default

    div$$.appendChild(img$$)
    div$$.appendChild(span$$)

    //img$$.setAttribute('src', 'temp')
    console.log(pokemonObj);
    console.log(pokemonObj.results[1].url);


  //   <figure>
  //               <img src="http://assets.climatecentral.org/images/made/3_16_16_upton_paris_720_405_s_c1_c_c.jpg" >
  //               <figcaption>Fig.1 - París de noche (Enero de 2016)</figcaption>
  //           </figure>

  // }
}

function drawPokemon(i, pokemonObj){
  console.log('aqui se pintan');
}

//init
const init = () => {
    getPokemons(drawPokemons);
    addEventListener('DOMContentLoaded', () => {});
    console.log('Website Loaded')
  };
  
  init();
  