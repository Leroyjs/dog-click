import { combineReducers } from "redux";
import { favoriteReducers } from "./reducers/favoriteReducers";
import { filterReducers } from "./reducers/filterReducers";
import { comparisonReducers } from "./reducers/comparisonReducers";
import { modalsReducers } from "./reducers/modalsReducers";

export const rootReducer = combineReducers({
  filters: filterReducers,
  favorite: favoriteReducers,
  comparison: comparisonReducers,
  modals: modalsReducers,
});
