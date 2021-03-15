import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAHFwIIOiWw9YYCcNAfMWbcHOzEv0jFu6Y',
  authDomain: 'slack-home-cooked.firebaseapp.com',
  projectId: 'slack-home-cooked',
  storageBucket: 'slack-home-cooked.appspot.com',
  messagingSenderId: '697783253388',
  appId: '1:697783253388:web:9e5a7c92aa85482f8f7ea9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
