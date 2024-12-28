/* eslint-disable @typescript-eslint/no-explicit-any */
import { Col, Row, Spin } from "antd";
import { useEffect } from "react";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Searcher } from "./components/Searcher";
import { getAllPokemons } from "./services/pokeApi";
import logo from "./statics/logo.svg";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getPokemonsWithDetails } from "./actions";
import { RootState } from "./reducers/rootReducer";

function App() {
  const pokemons = useSelector((state: RootState) =>
    state.getIn(["data", "pokemons"], shallowEqual).toJS(),
  );

  const loading = useSelector(
    (state: RootState) => state.getIn(["ui", "loading"]) as boolean,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonRes = await getAllPokemons();
        dispatch(getPokemonsWithDetails(pokemonRes) as any);
      } catch (error) {
        console.error("Error fetching pokemons:", error);
      }
    };

    fetchPokemons();
  }, [dispatch]);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
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
