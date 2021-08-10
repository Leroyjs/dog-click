import {REMOVE_COMPARISON_ITEM,ADD_COMPARISON_ITEM,SET_COMPARISON_ITEMS} from '../types';

const initialState = [];

export const comparisonReducers = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_COMPARISON_ITEMS:
            newState = action.payload;
            localStorage.comparisonItems = JSON.stringify(newState)
            return newState;
        case REMOVE_COMPARISON_ITEM:
            newState = state.filter(item=>item.id !== action.payload.id)
            localStorage.comparisonItems = JSON.stringify(newState)
            return newState;
        case ADD_COMPARISON_ITEM:
            newState = [action.payload, ...state];
            localStorage.comparisonItems = JSON.stringify(newState)
            return newState;
        default:
            return state;
    }
};