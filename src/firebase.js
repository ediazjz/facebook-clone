import firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyACnXIBJxLZ50GsFVOhHKf0HbNyypeIwms",
  authDomain: "fb-clone-e4a4b.firebaseapp.com",
  projectId: "fb-clone-e4a4b",
  storageBucket: "fb-clone-e4a4b.appspot.com",
  messagingSenderId: "269214698436",
  appId: "1:269214698436:web:c2bdaf93a58f3c728e3291",
  measurementId: "G-L9J3V66ETJ"
};

const devConfig = {
  apiKey: "AIzaSyBHn2LIAEfYJo7EJHbz1WsEEkWc6AvjXB4",
  authDomain: "test-5f2ae.firebaseapp.com",
  projectId: "test-5f2ae",
  storageBucket: "test-5f2ae.appspot.com",
  messagingSenderId: "499448388463",
  appId: "1:499448388463:web:44c2bc3593086a39e8269a"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default db;
