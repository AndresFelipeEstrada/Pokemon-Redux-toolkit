import { Col, Row, Spin } from "antd";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Searcher } from "./components/Searcher";
import logo from "./statics/logo.svg";
import { usePokemonList } from "./hooks/usePokemonList";

function App() {
  const { pokemons, loading } = usePokemonList();
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img className="img__logo" src={logo} alt="Pokedux" />
      </Col>
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Searcher />
          <Col span={12} offset={12}>
            <Spin spinning={loading} size="large" className="spin" />
          </Col>
          <PokemonList pokemons={pokemons} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
