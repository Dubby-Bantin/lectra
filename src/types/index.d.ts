declare type UserType = "creator" | "editor" | "viewer";
import { Timestamp } from "firebase/firestore";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare type InstructorData = {
  firstName: string;
  lastName: string;
  id?: string;
  email: string;
  createdAt: Timestamp;
  preferred_language: string;
  degree: string;
  major: string;
  gender?: string;
  phoneNumber: string | undefined;
  university: string;
  expertise: string;
  selectedDays: string[];
  employment_history?: string;
  profileImageUrl: string | StaticImageData | StaticImport;
  teachingCertificateUrl: string;
  idVerificationUrl: string;
  subscribedUsers?: string[];
  bio: string;
  role?: string;
};

declare type InstructorProfileSetUpFireStoreData = {
  preferred_language: string;
  degree: string;
  major: string;
  gender: string;
  phoneNumber: string | undefined;
  university: string;
  selectedDays: string[];
  employment_history: FormDataEntryValue | null;
  profileImageUrl?: string | StaticImageData | StaticImport;
  teachingCertificateUrl?: string;
  idVerificationUrl?: string;
  expertise: string;
  bio: string;
};

declare type LectureReminderEmailProps = {
  lectureTitle: string;
  studentName: string[];
  lectureCategory: string;
  lectureTime: string;
  lectureId?: string | undefined;
  instructorName: string;
  duration?: string;
};
declare type RoomDocument = {
  id: string;
  metadata: { title?: string };
  createdAt: string;
};

declare type LiveBlockRoomsProps = {
  headerText?: string;
  id?: string;
  email: string;
  userId?: string;
  text?: string;
  subscribedUsers?: string[];
  roomDocuments: { data: RoomDocument[] };
};

declare type RoomMetadata = {
  creatorId: string;
  email: string;
  title: string;
};
declare type Option = {
  value: string;
};
declare type AccessType = ["room:write"] | ["room:read", "room:presence:write"];

declare type RoomAccesses = Record<string, AccessType>;

declare type CreateDocumentParams = {
  title: string;
  userId: string;
  email: string;
};
declare type AddDocumentBtnProps = {
  title?: string;
  userId?: string;
  email: string;
};

declare type CollaborativeRoomProps = {
  roomId: string;
  roomMetadata: RoomMetadata;
  userId?: string;
  users?: User[];
  currentUserType?: UserType;
};

declare type FAQ = {
  Icon: React.ElementType; // Icon type
  question: string;
  answer: string;
};

declare type FAQItemProps = {
  question: string;
  answer: string;
  Icon: React.ElementType;
  isOpen: boolean;
  onClick: () => void;
};

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };
