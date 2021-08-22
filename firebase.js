import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA0y2VUGx4cupDAnF1zSDnV0HWSUGEzJm4",
  authDomain: "fir-95595.firebaseapp.com",
  projectId: "fir-95595",
  storageBucket: "fir-95595.appspot.com",
  messagingSenderId: "323028665946",
  appId: "1:323028665946:web:4b0ab0c056b9a9831d7a63"
};

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;