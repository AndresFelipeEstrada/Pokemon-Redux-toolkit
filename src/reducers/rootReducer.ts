import { Map } from "immutable";
import { combineReducers } from "redux";
import { PokemonsState } from "./pokemons";
import { UiState } from "./ui";
import dataReducer from "../slices/dataSlice";

export type RootState = Map<string, PokemonsState | UiState>;

export const rootReducer = combineReducers({
  data: dataReducer,
});
