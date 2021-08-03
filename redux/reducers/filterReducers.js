import {SET_FILTERS,SET_GENDER,SET_BREED_IDS,SET_CITY_ID,SET_COLOR_IDS,SET_SIZE_ID,SET_PRICE_FROM,SET_PRICE_TO,SET_HAS_PEDIGREE} from '../types';

let initialState = {
    gender: null,
    breedIds: null,
    cityId: null,
    sizeId: null,
    priceFrom: null,
    priceTo: null,
    hasPedigree: null,
};

export const filterReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTERS:
            return action.payload;
        case SET_GENDER:
            return state.gender = action.payload;
        case SET_BREED_IDS:
            return action.payload;
        case SET_CITY_ID:
            return action.payload;
        case SET_COLOR_IDS:
            return action.payload;
        case SET_SIZE_ID:
            return action.payload;
        case SET_PRICE_FROM:
            return action.payload;
        case SET_PRICE_TO:
            return action.payload;
        case SET_HAS_PEDIGREE:
            return action.payload;
        default:
            return state;
    }
};