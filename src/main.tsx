import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons.ts";
import {
  Action,
  applyMiddleware,
  legacy_createStore as createStore,
  Store,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger, featuring } from "./middlewares/index";

const composedEnhancers = composeWithDevTools(
  applyMiddleware(logger, featuring),
);

const store: Store<RootState, Action> = createStore(
  pokemonsReducer,
  composedEnhancers,
);

export type RootState = ReturnType<typeof pokemonsReducer>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
