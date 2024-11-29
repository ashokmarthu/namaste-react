import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const app = initializeApp("firebaseConfig");
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
