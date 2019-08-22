import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import alert from "./alert";
import location from './location'
import bathroom from './bathroom'

export default combineReducers({
  alert,
  firebase: firebaseReducer,
  location,
  bathroom
});
