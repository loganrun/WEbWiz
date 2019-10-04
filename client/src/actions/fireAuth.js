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
    console.log(data);
    console.log(res);
    createUser(data, res);

    dispatch({ type: actions.SIGN_UP_SUCCESS });
  } catch (err) {
    console.log(err.message);
    dispatch({ type: actions.SIGN_UP_FAIL });
  }
};

export const createUser = (data, res) => {
  axios
    .post("http://localhost:5000/api/users", {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userName: data.userName,
      userId: res.user.uid,
      promotions: data.promotions
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      throw error;
    });
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
