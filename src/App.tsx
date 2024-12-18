import { Col, Row } from "antd";
import { useEffect } from "react";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Searcher } from "./components/Searcher";
import { getAllPokemon } from "./services/pokeApi";
import logo from "./statics/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "./actions";
import { RootState } from "./main";

function App() {
  const pokemons = useSelector((state: RootState) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPokemon().then((data) => dispatch(setPokemons(data)));
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Searcher />
          <PokemonList pokemons={pokemons} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
