import { Col, Row } from "antd";
import { useEffect } from "react";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Searcher } from "./components/Searcher";
import { getAllPokemon } from "./services/pokeApi";
import logo from "./statics/logo.svg";
import { Pokemons, State } from "./types/pokemons";
import { connect } from "react-redux";
import { setPokemons as setPokemonsActions } from "./actions";
import { Dispatch } from "redux";
interface AppProps {
  pokemons: Pokemons[];
  setPokemons: (value: Pokemons[]) => void;
}
function App({ pokemons, setPokemons }: AppProps) {
  console.log(pokemons);

  useEffect(() => {
    getAllPokemon().then((data) => setPokemons(data || []));
  }, [setPokemons]);

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

interface DispatchProps {
  setPokemons: (value: Pokemons[]) => void;
}
const mapStateToProps = (state: State): State => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
