import * as actions from "./types";
import axios from "axios";
export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  //const firestore = getFirestore();
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    await axios({
      //firestore.collection('users').doc(res.user.uid).set({
      method: "post",
      url: "https://whizzit.herokuapp.com/api/users",
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        userName: data.userName,
        uid: data.user.uid,
        promotions: data.promotions
      }
    });
    dispatch({ type: actions.SIGN_UP_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: actions.SIGN_UP_FAIL });
  }
};

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    dispatch({ type: actions.SIGN_IN_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: actions.SIGN_IN_FAIL });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err.message);
  }
};
