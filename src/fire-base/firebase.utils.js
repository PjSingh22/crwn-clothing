import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyBA3BS63wwceNkwHIODYBzHOEJhJZWmzvk",
  authDomain: "crwn-db-434c2.firebaseapp.com",
  databaseURL: "https://crwn-db-434c2.firebaseio.com",
  projectId: "crwn-db-434c2",
  storageBucket: "crwn-db-434c2.appspot.com",
  messagingSenderId: "481035650535",
  appId: "1:481035650535:web:8a0d53cfe20dbd33662942",
  measurementId: "G-V11ZWEPB1Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;