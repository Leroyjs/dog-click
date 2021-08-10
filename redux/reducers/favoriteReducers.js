import {REMOVE_FAVORITE_ITEM,ADD_FAVORITE_ITEM,SET_FAVORITE_ITEMS} from '../types';

const initialState = [];

export const favoriteReducers = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_FAVORITE_ITEMS:
            newState = action.payload;
            localStorage.favoriteItems = JSON.stringify(newState)
            return newState;
        case REMOVE_FAVORITE_ITEM:
            newState = state.filter(item=>item.id !== action.payload.id)
            localStorage.favoriteItems = JSON.stringify(newState)
            return newState;
        case ADD_FAVORITE_ITEM:
            newState = [action.payload, ...state];
            localStorage.favoriteItems = JSON.stringify(newState)
            return newState;
        default:
            return state;
    }
};