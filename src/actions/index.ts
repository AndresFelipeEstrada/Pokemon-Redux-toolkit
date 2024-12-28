import { Dispatch } from "redux";
import { PokemonDetail, Pokemons } from "../types/pokemons";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../services/pokeApi";

export const setPokemons = (payload: PokemonDetail[]) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload: boolean) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload: { pokemonId: number }) => ({
  type: SET_FAVORITE,
  payload,
});

export const getPokemonsWithDetails =
  (pokemons: Pokemons[]) => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const pokemonDetails = await Promise.all(
        pokemons.map((pokemon) => getPokemonDetails({ url: pokemon.url })),
      );
      dispatch(setPokemons(pokemonDetails));
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

export type PokemonAction =
  | ReturnType<typeof setPokemons>
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setFavorite>;

