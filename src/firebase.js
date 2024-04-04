// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhnHFy2tc6JieE9o6b7i5Fhz-mMTGTCYI",
  authDomain: "brilliant-avenir.firebaseapp.com",
  projectId: "brilliant-avenir",
  storageBucket: "brilliant-avenir.appspot.com",
  messagingSenderId: "13421414670",
  appId: "1:13421414670:web:b795be12058a10acffef5f",
  measurementId: "G-T6XZBF42E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;