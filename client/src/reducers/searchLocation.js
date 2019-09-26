import { SEARCH_LOCATION, SEARCH_LOCATION_ERROR } from "../actions/types";
const initialState = {
  searchlocation: [],
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_LOCATION:
      return { ...state, searchlocation: { ...state.searchlocation, payload } };
    case SEARCH_LOCATION_ERROR:
      return { ...state, error: { ...state.error, payload } };
    default:
      return state;
  }
}
