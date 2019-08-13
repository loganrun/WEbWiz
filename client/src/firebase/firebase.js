import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  const firebaseConfig = {
    apiKey: "AIzaSyCfx94bwaO-VnQosXn4aUIi_DKUCdAcdEA",
    authDomain: "wizusers.firebaseapp.com",
    databaseURL: "https://wizusers.firebaseio.com",
    projectId: "wizusers",
    storageBucket: "wizusers.appspot.com",
    messagingSenderId: "5680477837",
    appId: "1:5680477837:web:8bff0f0c656ab065"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;