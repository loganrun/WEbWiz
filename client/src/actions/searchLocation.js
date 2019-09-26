import { SEARCH_LOCATION, SEARCH_LOCATION_ERROR } from "./types";

export const searchLocation = position => dispatch => {
  dispatch({
    type: SEARCH_LOCATION,
    payload: position
  });
};

export const searchLocationError = error => dispatch => {
  dispatch({
    type: SEARCH_LOCATION_ERROR,
    payload: error
  });
};
