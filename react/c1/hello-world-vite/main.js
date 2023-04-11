import { initFunkos } from "./src/components/Funkos/Funkos";
import { initPokemons } from "./src/components/Pokemons/Pokemons";

const initHome = () => {
  const buttonPokemons = document.querySelector("#pokemons");
  const buttonFunkos = document.querySelector("#funkos");

  buttonPokemons.addEventListener("click", initPokemons);
  buttonFunkos.addEventListener("click", initFunkos);
}

initHome();