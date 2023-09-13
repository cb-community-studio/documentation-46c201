// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bPojFlZi4DWI0YTUhzfHIRKrpHPlpOc",
  authDomain: "peravenapp.firebaseapp.com",
  projectId: "peravenapp",
  storageBucket: "peravenapp.appspot.com",
  messagingSenderId: "573187175654",
  appId: "1:573187175654:web:152b8ae91079d0dbfcf727",
  measurementId: "G-BW2ZQTCRB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };