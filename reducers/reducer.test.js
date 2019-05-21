import pokedexReducer from "./index";

test("reducer", () => {
  const initialState = {
    pokemons: []
  };

  const action = { type: "CATCH", pokemon: { name: "pikachu", defense: 19 } };

  const state = pokedexReducer(initialState, action);

  expect(state).toEqual({ pokemons: [{ name: "pikachu", defense: 19 }] });
});
