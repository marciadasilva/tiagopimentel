import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDZfoIr_o0mqbVkcP9F1QINRjOHbERYJfA",
  authDomain: "tiago-pimentel.firebaseapp.com",
  databaseURL: "https://tiago-pimentel.firebaseio.com",
  projectId: "tiago-pimentel",
  storageBucket: "tiago-pimentel.appspot.com",
  messagingSenderId: "965532265633"
};

firebase.iniializeApp(config);

const database = firebase.database();
const storage = firebase.storage().ref();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storage, googleAuthProvider, database as default };
