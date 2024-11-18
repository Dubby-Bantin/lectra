import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  doc,
  FirestoreError,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../firebaseAuth";
import { InstructorData } from "@/types";

// Firestore Data Interfaces
interface FirestoreData {
  [key: string]: string | number | boolean | object | null | undefined;
}
// Function to delete a document by its document ID
const deleteData = async (document: string, id: string): Promise<void> => {
  try {
    const DocRef = doc(db, document, id);
    await deleteDoc(DocRef);
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
    // Adding document to Firestore
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
  } catch (e: unknown) {
    throw new Error("Error Updating user details: " + e);
  }
};

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
const uploadImage = async (
  docRef: string,
  image: File,
  id: string
): Promise<string> => {
  const imageRef = ref(storage, `${docRef}/${id}/profile_image`);

  await uploadBytes(imageRef, image);
  return await getDownloadURL(imageRef);
};

const getFireStoreRefData = async (
  id: string | undefined,
  colRef: string
): Promise<InstructorData | null> => {
  if (!id) {
    console.error("ID is undefined");
    return null;
  }
  const collectionReference = doc(db, colRef, id);

  const collectionDocument = await getDoc(collectionReference);
  return collectionDocument.exists()
    ? ({
        id: collectionDocument.id,
        ...collectionDocument.data(),
      } as InstructorData)
    : null;
};

const getFirestoreDocs = async (
  colRef: string
): Promise<InstructorData[] | null> => {
  try {
    const collectionRef = collection(db, colRef);
    const collectionDocs = getDocs(collectionRef);
    return (await collectionDocs).docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as InstructorData)
    );
  } catch (e) {
    console.error("Error fetching Firestore documents:", e);
    throw new Error("Error fetching Firestore documents: " + e);
  }
};

export {
  deleteData,
  handleAdd,
  handleUpdate,
  uploadImages,
  getFireStoreRefData,
  uploadImage,
  getFirestoreDocs,
};
