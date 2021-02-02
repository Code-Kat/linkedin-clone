import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-YZAz9mR6uqK2GfD3XoPCrnLXTXUS0oY",
    authDomain: "linkedin-clone-88994.firebaseapp.com",
    projectId: "linkedin-clone-88994",
    storageBucket: "linkedin-clone-88994.appspot.com",
    messagingSenderId: "463448385743",
    appId: "1:463448385743:web:63f8748989e6268369afba"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase; 
