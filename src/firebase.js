// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCiYjtI6Lx_vWJmXElZz0NakbgAFKndLLg",
    authDomain: "pininterest-kgp.firebaseapp.com",
    projectId: "pininterest-kgp",
    storageBucket: "pininterest-kgp.appspot.com",
    messagingSenderId: "454027929257",
    appId: "1:454027929257:web:bccbb4b304b0b9c4066bb8",
    measurementId: "G-XHMXJX5SND"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default {db,auth}