import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Result } from "../types/pokemons";

export const PokemonCard = ({ pokemon }: { pokemon: Result }) => {
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.url} alt={pokemon.name} />}
      extra={<StarOutlined style={{ cursor: "pointer" }} />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};
