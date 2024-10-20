import { clsx, type ClassValue } from "clsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { twMerge } from "tailwind-merge";
import { StylesConfig } from "react-select";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  doc,
  FirestoreError,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { db, storage } from "./firebase";
import { InstructorData, Option } from "./types";
import { redirect } from "next/navigation";

// Utility function to merge Tailwind and clsx classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Firestore Data Interfaces
interface FirestoreData {
  [key: string]: string | number | boolean | object | null | undefined;
}

// Function to delete a document by its document ID
const deleteData = async (document: string, id: string): Promise<void> => {
  try {
    const DocRef = doc(db, document, id); // Reference the document by ID
    await deleteDoc(DocRef); // Delete the document
  } catch (e) {
    const error = e as FirestoreError;
    alert(
      `Error deleting ${document + " document"}: ${
        error?.message || error?.name || error?.cause
      }`
    );
  }
};

// Function to add a new document to Firestore
const handleAdd = async (
  collectionName: string,
  data: FirestoreData
): Promise<{ id: string }> => {
  try {
    // Add document to Firestore
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return { id: docRef.id };
  } catch (e) {
    const error = e as FirestoreError;
    alert(
      `Error Adding ${document + " document"}: ${
        error?.message || error?.name || error?.cause
      }`
    );
    throw new Error("Error adding document");
  }
};

// Function to update an existing document in Firestore
const handleUpdate = async (
  collectionName: string,
  id: string,
  data: FirestoreData
): Promise<string> => {
  try {
    // Updatind document in Firestore
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);

    return docRef.id;
  } catch (e) {
    const error = e as FirestoreError;
    alert(
      `Error Updating ${document + " document"}: ${
        error?.message || error?.name || error?.cause
      }`
    );
    throw new Error("Error Updating document");
  }
};

// Utility function to convert Firestore timestamp to a readable date
const convertTimestampToDate = (timestamp: Timestamp): string => {
  if (!timestamp || !timestamp.seconds) {
    return "Invalid Date";
  }
  return new Date(timestamp.seconds * 1000).toDateString();
};

// firebaseUtils.ts

const uploadImages = async (images: File[], id: string): Promise<string[]> => {
  const uploadPromises: Promise<string>[] = [];

  images.forEach((image, index) => {
    const imageRef = ref(storage, `instructors/${id}/image_${index}`); // Naming convention can be changed
    uploadPromises.push(
      uploadBytes(imageRef, image).then(() => getDownloadURL(imageRef))
    );
  });

  return await Promise.all(uploadPromises);
};

const getFireStoreRefData = async (
  id: string,
  colRef: string
): Promise<InstructorData> => {
  const collectionReference = doc(db, colRef, id);

  const collectionDocument = await getDoc(collectionReference);
  return collectionDocument.exists()
    ? { id: collectionDocument.id, ...collectionDocument.data() }
    : redirect("/signup");
};

const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

const customStyles: StylesConfig<Option> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--control-bg)",
    borderColor: state.isFocused
      ? "var(--focus-border)"
      : "var(--normal-border)",
    color: "var(--text-color)",
    boxShadow: state.isFocused ? "0 0 0 1px var(--focus-border)" : undefined,
    "&:hover": {
      borderColor: "var(--hover-border)",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "var(--menu-bg)",
    color: "var(--text-color)",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "var(--focus-bg)" : "transparent",
    color: "var(--text-color)",
    "&:hover": {
      backgroundColor: "var(--hover-bg)",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "var(--text-color)",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "var(--placeholder-color)",
  }),
};

export {
  deleteData,
  handleAdd,
  handleUpdate,
  convertTimestampToDate,
  uploadImages,
  customStyles,
  getFireStoreRefData,
  capitalizeFirstLetter,
};
