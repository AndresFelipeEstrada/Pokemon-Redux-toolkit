import { Action, Dispatch, Middleware } from "redux";
import { RootState } from "../main";
import { SetPokemonAction } from "../reducers/pokemons";

export const logger: Middleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
};

export const featuring: Middleware = (store) => (next) => (action) => {
  const featured = [{ name: "andres" }, ...action.payload];
  const newAction = {
    ...action,
    payload: featured,
  };
  return next(newAction);
};
