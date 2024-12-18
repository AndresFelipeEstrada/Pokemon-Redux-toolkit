import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { pokemonsReducer } from "./reducers/pokemons.ts";
import { legacy_createStore as createStore } from "redux";

const store = createStore(pokemonsReducer);

createRoot(document.getElementById("root")!).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
