import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { logger } from "./middlewares/index";
import { rootReducer } from "./reducers/rootReducer.ts";

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);
export type AppDispatch = typeof store.dispatch;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
