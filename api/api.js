const baseURL = "https://pokeapi.co/api/v2/pokemon/";

import axios from "axios";

export async function usePokedex(pokemon) {
  pokemon = pokemon.toString().toLowerCase();
  await axios.get(baseURL + pokemon);
}
