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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;