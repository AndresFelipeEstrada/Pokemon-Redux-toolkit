import { Pokemons } from "../types/pokemons";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload: Pokemons[]) => ({
  type: SET_POKEMONS,
  payload,
});
