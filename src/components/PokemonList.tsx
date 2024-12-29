import "./pokemonList.css";
import { PokemonCard } from "./PokemonCard";
import { PokemonDetail } from "../types/pokemons";

export const PokemonList: React.FC<{
  pokemons: PokemonDetail[];
}> = ({ pokemons }) => {

  if (!pokemons) return null;

  const listClass =
    pokemons.length === 1 ? "pokemonList single" : "pokemonList";

  return (
    <div className={listClass}>
      {pokemons.map((pokemon: PokemonDetail) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
