import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBOt8ZP3bDAT216tUdJskKsIVrjUk-izYc",
  authDomain: "stock-marke-d8bf0.firebaseapp.com",
  databaseURL: "https://stock-marke-d8bf0.firebaseio.com",
  projectId: "stock-marke-d8bf0",
  storageBucket: "stock-marke-d8bf0.appspot.com",
  messagingSenderId: "67640035641",
  appId: "1:67640035641:web:8a54339c6899772e7780e8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
