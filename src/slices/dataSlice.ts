import { createSlice } from "@reduxjs/toolkit";
import { PokemonDetail } from "../types/pokemons";

const initialState = {
  pokemons: [] as PokemonDetail[],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },

    setFavorite: (state, action) => {
      const pokemons = state.pokemons;

      if (!pokemons) return state;

      const index = pokemons.findIndex(
        (p) => p.id === action.payload.pokemonId,
      );

      if (index >= 0) {
        const isFavorite = state.pokemons[index].favorite;
        state.pokemons[index].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;
export default dataSlice.reducer;
