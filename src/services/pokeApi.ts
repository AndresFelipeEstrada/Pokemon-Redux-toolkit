import axios from "axios";
import { API, PokemonDetail, Pokemons } from "../types/pokemons";

export const getAllPokemons = async (): Promise<Pokemons[]> => {
  const { data } = await axios.get<API>(
    "https://pokeapi.co/api/v2/pokemon?limit=151",
  );
  return data.results;
};

export const getPokemonDetails = async ({
  url,
}: {
  url: string;
}): Promise<PokemonDetail> => {
  const { data } = await axios.get(url);

  return data;
};
