import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import alert from "./alert";
import location from "./location";
import bathroom from "./bathroom";
import fireAuth from "./fireAuth";
import searchLocation from "./searchLocation";

export default combineReducers({
  alert,
  fireAuth,
  firebase: firebaseReducer,
  location,
  bathroom,
  searchLocation
});
