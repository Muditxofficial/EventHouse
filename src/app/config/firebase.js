import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_FIREBASE}`,
//   authDomain: "seminar-7ba80.firebaseapp.com",
//   projectId: "seminar-7ba80",
//   storageBucket: "seminar-7ba80.appspot.com",
//   messagingSenderId: "693833085797",
//   appId: "1:693833085797:web:36429d28a43200c5ad278c",
// };

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE}`,
  authDomain: "test-8935f.firebaseapp.com",
  projectId: "test-8935f",
  storageBucket: "test-8935f.appspot.com",
  messagingSenderId: "519384813343",
  appId: "1:519384813343:web:40d56c1c2373621611ea2a",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
