import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBCGAa3CeQOxvM0xb7h7_oP2Q9YOQQsAD4",
  authDomain: "pro-71-9d217.firebaseapp.com",
  projectId: "pro-71-9d217",
  storageBucket: "pro-71-9d217.appspot.com",
  messagingSenderId: "325039375597",
  appId: "1:325039375597:web:bdf463efbe1159d06638e4"
};

// Initialize Firebase

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
