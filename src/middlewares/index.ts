import { Middleware } from "redux";

export const logger: Middleware = (store) => (next) => (action) => {
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
