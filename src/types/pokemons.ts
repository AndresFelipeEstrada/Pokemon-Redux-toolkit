export interface API {
  count: number;
  next: string;
  previous: null;
  results: Pokemons[];
}

export interface Pokemons {
  name: string;
  url: string;
}

export interface State {
  pokemons: Pokemons[];
}
