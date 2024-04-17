// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDryiz3wIyt-ZOJTFvrm6EPeKEvTRWyUBU",
  authDomain: "dalpala-c763a.firebaseapp.com",
  projectId: "dalpala-c763a",
  storageBucket: "dalpala-c763a.appspot.com",
  messagingSenderId: "1014317236591",
  appId: "1:1014317236591:web:0fe0597e436771a337289a",
  measurementId: "G-MVFL1XD090"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;