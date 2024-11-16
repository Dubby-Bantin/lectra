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
  userId: string;
  email: string;
};
declare type AddDocumentBtnProps = {
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

declare type ThreadWrapperProps = { thread: ThreadData<BaseMetadata> };
