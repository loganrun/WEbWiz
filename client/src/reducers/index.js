import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import alert from "./alert";

export default combineReducers({
  alert,
  firebase: firebaseReducer
});
