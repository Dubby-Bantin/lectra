export type InstructorData = {
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
  profileImageUrl?: string; // Add optional properties for the images
  teachingCertificateUrl?: string;
  idVerificationUrl?: string;
};
