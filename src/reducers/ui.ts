import { Action } from "redux";
import { SET_LOADING } from "../actions/types";
import { fromJS } from "immutable";

interface SetLoadingAction extends Action {
  type: typeof SET_LOADING;
  payload: boolean;
}

export type UiState = Map<string, boolean>;

const initialState: UiState = fromJS({
  loading: false,
});

export const uiReducer = (
  state = initialState,
  action: SetLoadingAction,
): UiState => {
  switch (action.type) {
    case SET_LOADING:
      return state.set("loading", action.payload);
    default:
      return state;
  }
};
