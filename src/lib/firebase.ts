import { FirebaseError, initializeApp } from "firebase/app";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { handleAdd } from "./utils";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9A6d67trGm9pRB6QWWSXPQtQvMUq2CRE",
  authDomain: "fir-tutorial-4d232.firebaseapp.com",
  projectId: "fir-tutorial-4d232",
  storageBucket: "fir-tutorial-4d232.appspot.com",
  messagingSenderId: "42402119655",
  appId: "1:42402119655:web:f96bd408f9c63a76660742",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
auth.useDeviceLanguage();

// Corrected signUp function
const signUp = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    const { user } = await createUserWithEmailAndPassword(auth, email,password);

    const data = { name, email, role };

    if (role === "instructor") {
      const { id } = await handleAdd("instructors", data);
      return { user, error: null, id };
    } else {
      const { id } = await handleAdd("students", data);
      return { user, error: null, id };
    }
  } catch (e: unknown) {
    // Handle errors from Firebase Auth
    const errorMessage =
      e instanceof FirebaseError
        ? e.code.split("/")[1].replace(/-/g, " ") // Parse and format error message
        : "An error occurred";

    return { user: null, e: errorMessage };
  }
};

const logIn = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return { response, error: null };
  } catch (e: unknown) {
    const errorMessage =
      e instanceof FirebaseError
        ? e?.code.split("/")[1].split("-").join(" ")
        : "An error occurred";
    return { e: errorMessage };
  }
};

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
  } catch (e: unknown) {
    const errorMessage =
      e instanceof FirebaseError ? e.message : "An error occurred";
    console.log(errorMessage);
  }
};

const signInWithGitHub = async () => {
  try {
    await signInWithRedirect(auth, new GithubAuthProvider());
  } catch (e: unknown) {
    const errorMessage =
      e instanceof FirebaseError
        ? e?.code.split("/")[1].split("-").join(" ")
        : "An error occurred";
    console.log(errorMessage);
  }
};

const logOut = async () => {
  console.log("logging out...");
  signOut(auth);
  console.log("logged out...");
};

export {
  auth,
  storage,
  signInWithGoogle,
  signInWithGitHub,
  logOut,
  signUp,
  logIn,
  db,
};
