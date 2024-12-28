import "./pokemonList.css";
import { PokemonCard } from "./PokemonCard";
import { PokemonDetail } from "../types/pokemons";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";

export const PokemonList: React.FC<{
  pokemons: PokemonDetail[] | undefined;
}> = () => {
  const pokemons = useSelector((state: RootState) =>
    state.getIn(["data", "pokemons"]).toJS(),
  );

  if (!pokemons) return null;

  return (
    <div className="pokemonList">
      {pokemons.map((pokemon: PokemonDetail) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
