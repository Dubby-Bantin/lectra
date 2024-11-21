import { FirebaseError, initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
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
import { handleAdd } from "./utils/fireBaseUtils";
import { setUserIdCookie } from "./actions/cookies.actions";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAuaPF5AXPs9HE4_4iD6sSHe1bBkqM1evE",
  authDomain: "test-b67b2.firebaseapp.com",
  projectId: "test-b67b2",
  storageBucket: "test-b67b2.appspot.com",
  messagingSenderId: "681305269903",
  appId: "1:681305269903:web:8d8e9a308d6bb7f65072fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
auth.useDeviceLanguage();

const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: string
) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const data = { firstName, lastName, email, role };

    if (role === "instructor") {
      const { id } = await handleAdd("instructors", data);
      await setUserIdCookie(id);
      return { user, error: null, id };
    } else {
      const { id } = await handleAdd("students", data);
      await setUserIdCookie(id);
      return { user, error: null, id };
    }
  } catch (e: unknown) {
    const errorMessage =
      e instanceof FirebaseError
        ? e.code.split("/")[1].replace(/-/g, " ")
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
