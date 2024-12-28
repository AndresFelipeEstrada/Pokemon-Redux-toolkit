import { Action } from "redux";
import { SET_POKEMONS, SET_FAVORITE } from "../actions/types";
import { PokemonDetail } from "../types/pokemons";
import { fromJS, List } from "immutable";

export interface PokemonsState {
  pokemons: List<PokemonDetail>;
}

interface SetPokemonsAction extends Action {
  payload: PokemonDetail[];
}

interface SetFavoriteAction extends Action {
  payload: { pokemonId: number };
}

type PokemonAction = SetPokemonsAction | SetFavoriteAction;

const initialState = fromJS({
  pokemons: [],
});

export const pokemonsReducer = (
  state = initialState,
  action: PokemonAction,
) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return state.setIn(["pokemons"], fromJS(action.payload));
    }
    case SET_FAVORITE: {
      const pokemons = state.get("pokemons");

      if (!pokemons) return state;

      const index = pokemons.findIndex(
        (p) => p.get("id") === action.payload.pokemonId,
      );

      if (index >= 0) {
        return state.setIn(
          ["pokemons", index, "favorite"],
          !state.getIn(["pokemons", index, "favorite"]),
        );
      }
      return state;
    }
    default:
      return state;
  }
};
