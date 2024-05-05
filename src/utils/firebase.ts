// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzbEFNhZyOwQNfNh4AYaJ2V2RfY6L73ZQ",
  authDomain: "personalauth-82c35.firebaseapp.com",
  projectId: "personalauth-82c35",
  storageBucket: "personalauth-82c35.appspot.com",
  messagingSenderId: "556399113377",
  appId: "1:556399113377:web:1818fbc31034165d0f6ce0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
