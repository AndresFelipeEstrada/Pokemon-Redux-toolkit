import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
import { pokemonsReducer, PokemonsState } from "./pokemons";
import { uiReducer, UiState } from "./ui";

export type RootState = Map<string, PokemonsState | UiState>;

export const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});
