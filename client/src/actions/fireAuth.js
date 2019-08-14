export const signUp = data => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);
    console.log(res);
    await firestore.collection('users').doc(res.user.uid).set({
        firstName:  data.firstName,
        lastName:   data.lastName,
        email:  data.email,
        promotions: data.promotions
    })
  } catch (err) {
    console.log(err.message);
  }
};

export const signIn = data => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(data.email, data.password);

    } catch (err) {
    console.log(err.message)
    }
      
  };
  
