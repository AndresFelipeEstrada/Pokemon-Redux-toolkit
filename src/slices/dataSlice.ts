import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonDetail } from "../types/pokemons";
import { getAllPokemons, getPokemonDetails } from "../services/pokeApi";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [] as PokemonDetail[],
  searchResults: [] as PokemonDetail[],
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemonRes = await getAllPokemons();
    const pokemonDetails = await Promise.all(
      pokemonRes.map((pokemon) => getPokemonDetails({ url: pokemon.url })),
    );
    dispatch(setPokemons(pokemonDetails));
    dispatch(setLoading(false));
  },
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.searchResults = action.payload;
    },
    setSearchPokemons: (state, action) => {
      const search = action.payload.toLowerCase();
      state.searchResults = state.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search),
      );
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

export const { setPokemons, setFavorite, setSearchPokemons } =
  dataSlice.actions;
export default dataSlice.reducer;
