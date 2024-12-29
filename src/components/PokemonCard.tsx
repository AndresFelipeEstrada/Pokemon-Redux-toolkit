import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { PokemonDetail } from "../types/pokemons";
import { StarButton } from "./StarButton";
import { memo } from "react";
import { usePokemonCard } from "../hooks/usePokemonCard";

export const PokemonCard = memo(
  ({ pokemon }: { pokemon: PokemonDetail }) => {

    const { typeColors, handleOnFavorite } = usePokemonCard(pokemon);

    return (
      <Card
        title={`#${pokemon.id}`}
        cover={
          <img
            src={pokemon.sprites.other?.["official-artwork"].front_default}
            alt={pokemon.name}
          />
        }
        extra={
          <StarButton
            isFavorite={pokemon.favorite}
            onClick={handleOnFavorite}
          />
        }
      >
        <Meta
          style={{
            textAlign: "center",
          }}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          description={
            <div>
              {pokemon.types.map(({ type }) => (
                <span
                  key={type.name}
                  style={{
                    backgroundColor: typeColors[type.name] ?? "#fff",
                    color: "#FFFFFF",
                    padding: "5px 10px",
                    margin: "0 5px",
                    borderRadius: "5px",
                    display: "inline-block",
                  }}
                >
                  {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                </span>
              ))}
            </div>
          }
        />
      </Card>
    );
  },
  (prevProps, nextProps) =>
    prevProps.pokemon.id === nextProps.pokemon.id &&
    prevProps.pokemon.favorite === nextProps.pokemon.favorite,
);
