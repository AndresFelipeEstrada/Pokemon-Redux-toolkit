import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PokemonDetail } from "../types/pokemons";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";
import { memo } from "react";

export const PokemonCard = memo(
  ({ pokemon }: { pokemon: PokemonDetail }) => {
    const dispatch = useDispatch();
    const types = pokemon.types.map(({ type }) => type.name).join(", ");

    const handleOnFavorite = () => {
      dispatch(setFavorite({ pokemonId: pokemon.id }));
    };

    return (
      <Card
        title={pokemon.name}
        cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
        extra={
          <StarButton
            isFavorite={pokemon.favorite}
            onClick={handleOnFavorite}
          />
        }
      >
        <Meta description={types} />
      </Card>
    );
  },
  (prevProps, nextProps) =>
    prevProps.pokemon.id === nextProps.pokemon.id &&
    prevProps.pokemon.favorite === nextProps.pokemon.favorite,
);
