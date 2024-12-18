import axios from "axios";
import { API, Pokemons } from "../types/pokemons";

export const getAllPokemon = async (): Promise<Pokemons[]> => {
  const { data } = await axios.get<API>(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
  );
  return data.results;
};
