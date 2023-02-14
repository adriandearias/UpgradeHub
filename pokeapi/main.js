//@import modules
import {getPokemons} from "./api.js";

//Global variable declaration
const arrayPokemons = [];

//function map
function mapPokemons(arrayPokemons){
  const mappedPokemons = arrayPokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    type: pokemon.types.map(type => type.type.name),
    weight: pokemon.weight,
    img: pokemon.sprites.front_shiny,
    abilities: pokemon.abilities[0].ability.name
  }))
  return mappedPokemons
}

//insert html to show/draw Pokemons
function drawPokemons(mappedPokemons) {  
  const divContent$$ = document.querySelector('.div-content')
  divContent$$.innerHTML = ''
    for (const pokemon of mappedPokemons) {
      const divPokemon$$ = document.createElement('div')
      const img$$ = document.createElement("img");
      const span$$ = document.createElement("span");
      const ulDescription$$ = document.createElement("ul")
      const li$$ = document.createElement("li");
      const li2$$ = document.createElement("li");
      const li3$$ = document.createElement("li");

      divContent$$.appendChild(divPokemon$$)
      divPokemon$$.appendChild(img$$)

      ulDescription$$.setAttribute('class', 'ul-description')
      divPokemon$$.setAttribute('class', 'div-pokemon')
      Object.assign(divPokemon$$, {
        className: `div-pokemon color-${pokemon.type[0]}`
      })
      setColor(divPokemon$$, pokemon.type[0])
      img$$.setAttribute('src', pokemon.img)
      img$$.setAttribute('class', 'img-pokemon')

      divPokemon$$.appendChild(span$$)
      const pokemonUppercase = pokemon.name
      span$$.innerHTML = `${pokemon.id}.${pokemonUppercase.charAt(0).toUpperCase() + pokemon.name.slice(1)}`

      divPokemon$$.appendChild(ulDescription$$)
      ulDescription$$.appendChild(li$$)
      ulDescription$$.appendChild(li2$$)
      ulDescription$$.appendChild(li3$$)
      li$$.innerHTML = 'Type ⫸ '
      pokemon.type.map( type =>li$$.innerHTML += `${type.toUpperCase()} ` )
      li2$$.innerHTML = `Weight ⫸ ${pokemon.weight} kg`
      const abilityUppercase = pokemon.abilities
      li3$$.innerHTML = `Ability ⫸ ${abilityUppercase.charAt(0).toUpperCase() + pokemon.abilities.slice(1)}`
    }
}
//function set color, used to color buttons and div-pokemon
function setColor(element, type){
  switch (type) {
    case 'grass':
      Object.assign(element.style, {
        background: '#63bb5b'
      })
      break;
    case 'poison':
      Object.assign(element.style, {
        background: '#ab6ac8'
      })
      break;
    case 'fire':
      Object.assign(element.style, {
        background: '#ff9c54'
      })
      break;
    case 'flying':
      Object.assign(element.style, {
        background: '#8fa8dd'
      })
      break;
    case 'water':
      Object.assign(element.style, {
        background: '#4d90d5'
      })
      break;
    case 'bug':
      Object.assign(element.style, {
        background: '#90c12c'
      })
      break;
    case 'normal':
      Object.assign(element.style, {
        background: '#9099a1'
      })
      break;
    case 'electric':
      Object.assign(element.style, {
        background: '#ffa710'
      })
      break;
    case 'ground':
      Object.assign(element.style, {
        background: '#d97746'
      })
      break;
    case 'fairy':
      Object.assign(element.style, {
        background: '#ec8fe6'
      })
      break;
    case 'fighting':
      Object.assign(element.style, {
        background: '#ce4069'
      })
      break;
    case 'psychic':
      Object.assign(element.style, {
        background: '#f97176'
      })
      break;
    case 'rock':
      Object.assign(element.style, {
        background: '#c7b78b'
      })
      break;
    case 'steel':
      Object.assign(element.style, {
        background: '#5a8ea1'
      })
      break;
    case 'ice':
      Object.assign(element.style, {
        background: '#74cec0'
      })
      break;
    case 'ghost':
      Object.assign(element.style, {
        background: '#5269ac'
      })
      break;
    case 'dragon':
      Object.assign(element.style, {
        background: '#0a6dc4'
      })
      break;
  }
}
//input event 
const setInput = (pokemons) =>{
  const input$$ = document.getElementById('find-input');
  input$$.addEventListener('keyup', () =>{
    filterPokemons(pokemons, input$$.value)
  })
}

//filter pokemons by input event value
const filterPokemons = (pokemons, inputValue) =>{
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(inputValue.toLowerCase()))
  return drawPokemons(filteredPokemons)
}

//draw and color buttons function
function drawButtons(pokemons){
  const types = []
  const btnAll$$ = document.createElement('button')
  const divBtn$$ = document.querySelector('.div-btn')

  divBtn$$.appendChild(btnAll$$)
  btnAll$$.innerHTML = 'Show All'
  Object.assign(btnAll$$, {
    className: `btn-type`,
    id: 'btn-all'
  })
  // setListener to btn to show all
  setBtnAll(btnAll$$, pokemons)
  //iterate to get types
  for (const pokemon of pokemons){
    for (const type of pokemon.type) {
      if(!types.includes(type)){
        types.push(type)   
      }
    }
  }
  for (const type of types) {
      const btn$$ = document.createElement('button')
      divBtn$$.appendChild(btn$$)
      //first letter of type to mayus
      let typeUppercase = type
      btn$$.innerHTML = typeUppercase.charAt(0).toUpperCase() + type.slice(1) 
      Object.assign(btn$$, {
        className: `btn-type btn-${type}`
      })
      //color button bg
      setColor(btn$$, type)
  }
  return setButtons(types, pokemons)
}

const setButtons = (types, pokemons) =>{
  for (const type of types) {
    const btn = document.querySelector(`.btn-${type}`)
    btn.addEventListener('click', () =>{
      drawPokemons(pokemons.filter(pokemon => pokemon.type.includes(type)))
    })
  }
}

function setBtnAll(btnAll, pokemons){
  btnAll.addEventListener('click', () =>{
    drawPokemons(pokemons)
  })
}

//init
const init = async () => {
    await getPokemons(arrayPokemons);
    window.addEventListener('DOMContentLoaded', () => {});
    console.log('DOM fully loaded and parsed');
    const mappedPokemons = mapPokemons(arrayPokemons) //pokemons
    setInput(mappedPokemons)
    drawButtons(mappedPokemons)
    drawPokemons(mappedPokemons)
  };
  
  init();
  