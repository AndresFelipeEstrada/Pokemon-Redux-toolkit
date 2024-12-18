import { Action, Reducer } from "redux";
import { SET_POKEMONS } from "../actions/types";
import { Pokemons, State } from "../types/pokemons";

interface SetPokemonAction extends Action {
  type: typeof SET_POKEMONS;
  payload: Pokemons[];
}

const initialState: State = {
  pokemons: [],
};

export const pokemonsReducer: Reducer<State, SetPokemonAction> = (
  state = initialState,
  action: Action,
) => {
  if (action.type === SET_POKEMONS) {
    return {
      ...state,
      pokemons: (action as SetPokemonAction).payload,
    };
  }

  return state;
};
