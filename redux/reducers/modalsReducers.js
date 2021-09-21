import { SET_MODALS } from "../types";

let initialState = {
  comparison: false,
  favorite: false,
};

export const modalsReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODALS:
      return action.payload;
    default:
      return state;
  }
};
