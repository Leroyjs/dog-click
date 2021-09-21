import {
  SET_MODALS,
  REMOVE_COMPARISON_ITEM,
  ADD_COMPARISON_ITEM,
  SET_COMPARISON_ITEMS,
  SET_FAVORITE_ITEMS,
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM,
  SET_FILTERS,
  SET_GENDER,
  SET_BREED_IDS,
  SET_CITY_ID,
  SET_COLOR_IDS,
  SET_SIZE_ID,
  SET_PRICE_FROM,
  SET_PRICE_TO,
  SET_HAS_PEDIGREE,
} from "./types.js";

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

export const setFaforiteItems = (items) => {
  return {
    type: SET_FAVORITE_ITEMS,
    payload: items,
  };
};

export const addFaforiteItem = (newItem) => {
  return {
    type: ADD_FAVORITE_ITEM,
    payload: newItem,
  };
};

export const removeFavoriteItem = (item) => {
  return {
    type: REMOVE_FAVORITE_ITEM,
    payload: item,
  };
};

export const setComparisonItems = (items) => {
  return {
    type: SET_COMPARISON_ITEMS,
    payload: items,
  };
};

export const addComparisonItem = (newItem) => {
  return {
    type: ADD_COMPARISON_ITEM,
    payload: newItem,
  };
};

export const removeComparisonItem = (item) => {
  return {
    type: REMOVE_COMPARISON_ITEM,
    payload: item,
  };
};
export const setModals = (item) => {
  return {
    type: SET_MODALS,
    payload: item,
  };
};
