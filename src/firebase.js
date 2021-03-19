import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACnXIBJxLZ50GsFVOhHKf0HbNyypeIwms",
  authDomain: "fb-clone-e4a4b.firebaseapp.com",
  projectId: "fb-clone-e4a4b",
  storageBucket: "fb-clone-e4a4b.appspot.com",
  messagingSenderId: "269214698436",
  appId: "1:269214698436:web:c2bdaf93a58f3c728e3291",
  measurementId: "G-L9J3V66ETJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
