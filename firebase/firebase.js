// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import "firebase/firestore";
// import "firebase/storage";
// import "firebase/analytics";
// import "firebase/performance";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD63dZZSlpxBN4gvntKllJqUR_56JH3PYs",
  authDomain: "elend1.firebaseapp.com",
  projectId: "elend1",
  storageBucket: "elend1.appspot.com",
  messagingSenderId: "644760798691",
  appId: "1:644760798691:web:759e60a4c4ea25ff7e0cd6",
  measurementId: "G-3GP5MHHYVE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const analytics = getAnalytics(app);

// export default function initFirebase() {
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }
// }
// export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
