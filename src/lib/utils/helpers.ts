import { getDocuments } from "@/lib/actions/room.actions";
import { Timestamp } from "firebase/firestore";
import { brightColors } from "./constants";

// Utility function to convert Firestore timestamp to a readable date
const convertTimestampToDate = (timestamp: Timestamp): string => {
  if (!timestamp || !timestamp.seconds) {
    return "Invalid Date";
  }
  return new Date(timestamp.seconds * 1000).toDateString();
};

const formatIsoToDateString = (isoString: Date | null): string => {
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
};

const getRandomColor = () => {
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
};

const getUserColor = (userId?: string) => {
  let sum = 0;
  if (!userId) {
    return;
  }
  for (let i = 0; i < userId.length; i++) {
    sum += userId.charCodeAt(i);
  }

  const colorIndex = sum % brightColors.length;
  return brightColors[colorIndex];
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

const capitalizeFirstLetter = (word: string | null) =>
  word !== null ? word?.charAt(0).toUpperCase() + word.slice(1) : "";

const parseStringify = (value: unknown) => JSON.parse(JSON.stringify(value));

const getRoomDocumentsLength = async (email: string): Promise<number> => {
  try {
    const roomDocuments = await getDocuments(email, 100);
    return roomDocuments.data.length;
  } catch (e) {
    console.error("Error fetching room documents:", e);
    return 0;
  }
};
export {
  getRoomDocumentsLength,
  convertTimestampToDate,
  formatIsoToDateString,
  getUserColor,
  getRandomColor,
  dateConverter,
  capitalizeFirstLetter,
  parseStringify,
};
