import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBwtO_4FrGC3uEQyeCrEW_ufvsAVBOiOMA",
  authDomain: "crwn-db-6969.firebaseapp.com",
  databaseURL: "https://crwn-db-6969.firebaseio.com",
  projectId: "crwn-db-6969",
  storageBucket: "crwn-db-6969.appspot.com",
  messagingSenderId: "594343934566",
  appId: "1:594343934566:web:cb2c8a151688fb232f8ba7",
  measurementId: "G-68KKMTPWTT"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
