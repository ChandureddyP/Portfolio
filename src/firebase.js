// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0Jl9ZG6eqkdywjU5Stdm5g59urO4T6_c",
  authDomain: "portfolio-838ad.firebaseapp.com",
  projectId: "portfolio-838ad",
  storageBucket: "portfolio-838ad.appspot.com",
  messagingSenderId: "874398617450",
  appId: "1:874398617450:web:95379b04a0a30eeeb31f13",
  measurementId: "G-T8SDHKNM7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);