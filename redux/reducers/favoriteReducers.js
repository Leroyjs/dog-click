import {REMOVE_FAVORITE_ITEM,ADD_FAVORITE_ITEM,SET_FAVORITE_ITEMS} from '../types';

const initialState = [];

export const favoriteReducers = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_FAVORITE_ITEMS:
            return action.payload;
        case REMOVE_FAVORITE_ITEM:
            newState = state.filter(item=>item !== action.payload)
            localStorage.favorites = JSON.stringify(newState)
            return newState;
        case ADD_FAVORITE_ITEM:
            newState = [action.payload, ...state];
            localStorage.favorites = JSON.stringify(newState)
            return newState;
        default:
            return state;
    }
};