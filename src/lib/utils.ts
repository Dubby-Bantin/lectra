import { clsx, type ClassValue } from "clsx";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { twMerge } from "tailwind-merge";
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
  getDocs,
} from "firebase/firestore";
import { db, storage } from "./firebase";
import { InstructorData, UserType } from "@/types";

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

// Utility function to convert Firestore timestamp to a readable date
const convertTimestampToDate = (timestamp: Timestamp): string => {
  if (!timestamp || !timestamp.seconds) {
    return "Invalid Date";
  }
  return new Date(timestamp.seconds * 1000).toDateString();
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
    return (await collectionDocs).docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching Firestore documents:", error);
    throw error;
  }
};

const capitalizeFirstLetter = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const parseStringify = (value: unknown) =>
  JSON.parse(JSON.stringify(value));

export const getAccessType = (userType: UserType) => {
  switch (userType) {
    case "creator":
      return ["room:write"];
    case "editor":
      return ["room:write"];
    case "viewer":
      return ["room:read", "room:presence:write"];
    default:
      return ["room:read", "room:presence:write"];
  }
};

const dateConverter = (timestamp: string): string => {
  const timestampNum = Math.round(new Date(timestamp).getTime() / 1000);
  const date: Date = new Date(timestampNum * 1000);
  const now: Date = new Date();

  const diff: number = now.getTime() - date.getTime();
  const diffInSeconds: number = diff / 1000;
  const diffInMinutes: number = diffInSeconds / 60;
  const diffInHours: number = diffInMinutes / 60;
  const diffInDays: number = diffInHours / 24;

  switch (true) {
    case diffInDays > 7:
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
    case diffInDays >= 1 && diffInDays <= 7:
      const days = Math.floor(diffInDays);
      return days === 1 ? "1 day ago" : `${days} days ago`;
    case diffInHours >= 1:
      const hours = Math.floor(diffInHours);
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    case diffInMinutes >= 1:
      const minutes = Math.floor(diffInMinutes);
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    default:
      return "Just now";
  }
};

// Function to generate a random color in hex format, excluding specified colors
export function getRandomColor() {
  const avoidColors = ["#000000", "#FFFFFF", "#8B4513"];

  let randomColor;
  do {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256); // Random number between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to hex format
    randomColor = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  } while (avoidColors.includes(randomColor));

  return randomColor;
}

export const brightColors = [
  "#2E8B57",
  "#FF6EB4",
  "#00CDCD",
  "#FF00FF",
  "#FF007F",
  "#FFD700",
  "#00CED1",
  "#FF1493",
  "#00CED1",
  "#FF7F50",
  "#9ACD32",
  "#FFA500",
  "#32CD32",
  "#ADFF2F",
  "#DB7093",
  "#00FF7F",
  "#FFD700",
  "#FF007F",
  "#FF6347",
];

export function getUserColor(userId?: string) {
  let sum = 0;
  if (!userId) {
    return;
  }
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }

  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
}

const heroSlides = [
  "https://media.istockphoto.com/id/1868588778/photo/e-learning-technology-concept-online-education-webinar-online-courses-ai-and-machine-learning.jpg?s=612x612&w=0&k=20&c=GtCOhuwN7iRPg9AtXvIHT1-zKyBnAbSciBzs0cJ9CD8=",
  "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/1352742022/photo/education-on-internet-technology-e-learning-education-and-internet-lessons-person-who-attends.jpg?s=612x612&w=0&k=20&c=Yp6EuEcHlL9cXJ1-OqJvBJjldL8E_GUm8NnRX4qMyAA=",
  "https://images.pexels.com/photos/4063590/pexels-photo-4063590.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/1158175009/photo/e-learning-for-student-and-university-concept.jpg?s=612x612&w=0&k=20&c=aZh1LvTCNXCJJ8JONFCatZMsxY0ofLHSp7nIaGhH338=",
  "https://media.istockphoto.com/id/1360520508/photo/businessman-using-a-computer-to-webinar-online-education-on-internet-online-courses-e.jpg?s=612x612&w=0&k=20&c=aJ1_9F4nJP8NdhI-Qfp6tQuZyaefcttn9_c5ldDZFNo=",
  "https://images.pexels.com/photos/4827576/pexels-photo-4827576.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://media.istockphoto.com/id/2177353072/photo/digital-recruitment-process-on-a-tablet-selecting-a-candidate-profile-for-hiring-great-for-hr.jpg?s=612x612&w=0&k=20&c=N1nqxHNbmjvfHxFNWc7Fv7pBhGjLHykgAtPpY2uIruo=",
];

function formatIsoToDateString(isoString: Date | null): string {
  if (isoString === null) {
    return "Invalid date";
  }
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export {
  deleteData,
  handleAdd,
  handleUpdate,
  convertTimestampToDate,
  uploadImages,
  getFireStoreRefData,
  capitalizeFirstLetter,
  heroSlides,
  dateConverter,
  uploadImage,
  getFirestoreDocs,
  formatIsoToDateString,
};
