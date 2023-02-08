//@import modules
import {Pokemon} from "./pokemon.js";
import {getPokemons} from "./api.js";

//Global variable declaration
const arrayPokemons = [];
const divContent$$ = document.getElementsByClassName('div-content');


function drawPokemons(pokemonObj) {  
    const span$$ = document.createElement("span");
    const img$$ = document.createElement("img");

    divContent$$.appendC

    //img$$.setAttribute('src', 'temp')
  


  //   <figure>
  //               <img src="http://assets.climatecentral.org/images/made/3_16_16_upton_paris_720_405_s_c1_c_c.jpg" >
  //               <figcaption>Fig.1 - París de noche (Enero de 2016)</figcaption>
  //           </figure>

  // }
}

const findPokemon = ()=>{
  const filteredPokemons = ''
}

//init
const init = async () => {
    await getPokemons(arrayPokemons, drawPokemons);
    window.addEventListener('DOMContentLoaded', () => {});
    console.log('DOM fully loaded and parsed');
    console.log(arrayPokemons);
  };
  
  init();
  