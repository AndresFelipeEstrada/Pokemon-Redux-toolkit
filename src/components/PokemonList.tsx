import "./pokemonList.css";
import { PokemonCard } from "./PokemonCard";
import { Result } from "../types/pokemons";

export const PokemonList: React.FC<{ pokemons: Result[] | undefined }> = ({
  pokemons = Array(10).fill(""),
}) => {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
