import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";
import uiReducer from "../slices/uiSlice";

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});
