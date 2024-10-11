import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  doc,
  FirestoreError,
} from "firebase/firestore";
import { db } from "./firebase";

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
): Promise<string> => {
  try {
    // Add document to Firestore
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
    });

    return docRef.id;
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
const convertTimestampToDate = (timestamp: { seconds: number }): string => {
  if (!timestamp || !timestamp.seconds) return "Invalid Date";
  return new Date(timestamp.seconds * 1000).toDateString();
};

// Exporting the Firestore functions
export { deleteData, handleAdd, handleUpdate, convertTimestampToDate };
