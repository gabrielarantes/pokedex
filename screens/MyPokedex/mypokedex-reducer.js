import { filter } from "lodash";

const INITIAL_STATE = {
  pokemons: []
};

const pokedexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CATCH":
      return { ...state, pokemons: [...state.pokemons, action.pokemon] };
      break;
    case "DELETE":
      return {
        ...state,
        pokemons: filter(state.pokemons, item => item !== action.pokemon)
      };

      break;
    default:
      return state;
      break;
  }
};

export default pokedexReducer;
