import {ADD_FAVORITE_ITEM,REMOVE_FAVORITE_ITEM,SET_FILTERS,SET_GENDER,SET_BREED_IDS,SET_CITY_ID,SET_COLOR_IDS,SET_SIZE_ID,SET_PRICE_FROM,SET_PRICE_TO,SET_HAS_PEDIGREE} from './types.js';

export const setFilters = (stateFilters) => {
    return {
        type: SET_FILTERS,
        payload: stateFilters,
    };
};
export const setGender = (stateGender) => {
    return {
        type: SET_GENDER,
        payload: stateGender,
    };
};

export const addFaforiteItem = (newItem) => {
    return {
        type: ADD_FAVORITE_ITEM,
        payload: newItem,
    }
}

export const removeFavoriteItem = (item) => {
    return {
        type: REMOVE_FAVORITE_ITEM,
        payload: item,
    }
}