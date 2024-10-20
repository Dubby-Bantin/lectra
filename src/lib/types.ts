import { Timestamp } from "firebase/firestore";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type InstructorData = {
  id?: string;
  name?: string;
  email?: string;
  createdAt: Timestamp;
  preferred_language: string;
  degree: string;
  major: string;
  gender: string;
  phoneNumber: string | undefined;
  birthDate: Date | undefined;
  university: string;
  courses: string[];
  selectedDays: string[];
  employment_history: FormDataEntryValue | null;
  profileImageUrl: string | StaticImageData | StaticImport; // Add optional properties for the images
  teachingCertificateUrl: string;
  idVerificationUrl: string;
};

export type Option = {
  value: string;
  label: string;
};
