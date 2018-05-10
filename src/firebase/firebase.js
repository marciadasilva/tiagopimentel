import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDD8vrdgcmY2gbyY7BJ8lxnhy_3Y9EPhPY',
  authDomain: 'tiago-mma-app.firebaseapp.com',
  databaseURL: 'https://tiago-mma-app.firebaseio.com',
  projectId: 'tiago-mma-app',
  storageBucket: 'tiago-mma-app.appspot.com',
  messagingSenderId: '540549929948'
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage().ref();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storage, googleAuthProvider, database as default };
