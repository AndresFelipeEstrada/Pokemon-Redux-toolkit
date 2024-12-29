import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";
import { PokemonDetail } from "../types/pokemons";

type UsePokemonCardReturn = {
  handleOnFavorite: () => void;
  typeColors: Record<string, string>;
};

export const usePokemonCard = (
  pokemon: PokemonDetail,
): UsePokemonCardReturn => {
  const typeColors = {
    poison: "#B97FC9",
    grass: "#32CD32",
    fire: "#FF3737",
    water: "#3498DB",
    electric: "#F7DC6F",
    ice: "#66CCCC",
    fighting: "#D35400",
    psychic: "#E74C3C",
    fairy: "#FF69B4",
    flying: "#6495ED",
    bug: "#8BC34A",
    rock: "#964B00",
    ground: "#786C3B",
    steel: "#B1B1B1",
    dragon: "#00698f",
    dark: "#212121",
    normal: "#D3D3D3",
  };

  const dispatch = useDispatch();
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: pokemon.id }));
  };

  return { handleOnFavorite, typeColors };
};
