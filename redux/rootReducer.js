import { combineReducers } from 'redux';
import { favoriteReducers } from './reducers/favoriteReducers';
import { filterReducers } from './reducers/filterReducers';

export const rootReducer = combineReducers({
    filters: filterReducers,
    favorite: favoriteReducers
});