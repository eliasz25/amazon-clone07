// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDaqwnu6PkqQiGZZZktESmoMLLCHQvLjCc",
  authDomain: "clone7-a1cf3.firebaseapp.com",
  projectId: "clone7-a1cf3",
  storageBucket: "clone7-a1cf3.appspot.com",
  messagingSenderId: "811715183854",
  appId: "1:811715183854:web:02af13eb3371a8ab015fff",
  measurementId: "G-XV9V41SWJ4"
};


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };