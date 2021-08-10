import { combineReducers } from 'redux';
import { favoriteReducers } from './reducers/favoriteReducers';
import { filterReducers } from './reducers/filterReducers';
import { comparisonReducers } from './reducers/comparisonReducers';

export const rootReducer = combineReducers({
    filters: filterReducers,
    favorite: favoriteReducers,
    comparison: comparisonReducers
});