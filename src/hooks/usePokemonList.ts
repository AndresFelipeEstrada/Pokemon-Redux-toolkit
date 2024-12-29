import { useEffect } from "react";
import { fetchPokemonsWithDetails } from "../slices/dataSlice";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../main";
import { RootState } from "../reducers/rootReducer";
import { PokemonDetail } from "../types/pokemons";

type UsePokemonListReturn = {
  pokemons: PokemonDetail[];
  loading: boolean;
};

export const usePokemonList = (): UsePokemonListReturn => {
  const pokemons = useSelector(
    (state: RootState) => state.data.searchResults,
    shallowEqual,
  );

  const loading = useSelector((state: RootState) => state.ui.loading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  return { pokemons, loading };
};
