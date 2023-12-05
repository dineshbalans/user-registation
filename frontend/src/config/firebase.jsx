import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbnzGGZN_Uz1NfTG3LdNWB2FdnbMlydBY",
  authDomain: "user-registration-1397a.firebaseapp.com",
  databaseURL:
    "https://user-registration-1397a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "user-registration-1397a",
  storageBucket: "user-registration-1397a.appspot.com",
  messagingSenderId: "525351747395",
  appId: "1:525351747395:web:bfc5de1f02621701a679f6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);
googleProvider.setCustomParameters({ prompt: "select_account" });
const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });

export { auth, googleProvider, facebookProvider };
