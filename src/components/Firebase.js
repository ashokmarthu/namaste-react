import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: "AIzaSyAqqTyrh2n5onlLV1t9PzDsCfpWRaEcvD8",
  authDomain: "namaste-react-cb017.firebaseapp.com",
  projectId: "namaste-react-cb017",
  storageBucket: "namaste-react-cb017.firebasestorage.app",
  messagingSenderId: "133771177974",
  appId: "1:133771177974:web:a26303f7cc21f730afe1d7",
  measurementId: "G-NEZ16CZ13Z",
};
const app = initializeApp(firebaseConfig);
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
