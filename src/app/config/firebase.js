import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE}`,
  authDomain: "seminar-7ba80.firebaseapp.com",
  projectId: "seminar-7ba80",
  storageBucket: "seminar-7ba80.appspot.com",
  messagingSenderId: "693833085797",
  appId: "1:693833085797:web:36429d28a43200c5ad278c",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
