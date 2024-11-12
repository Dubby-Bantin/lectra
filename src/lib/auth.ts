"use server";

import { log } from "console";
import { logIn, signUp } from "./firebase";
import { handleUpdate, uploadImages } from "./utils";
import { InstructorProfileSetUpFireStoreData } from "@/types";
import { FirebaseError } from "firebase/app";
const createUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  try {
    const { e, user, id } = await signUp(name, email, password, role);

    if (e) {
      return { error: e };
    } else {
      return { error: null, userId: user?.uid, id };
    }
  } catch (e: unknown) {
    const errorMessage =
      e instanceof Error
        ? e.message
        : "Error creating an account, please try again.";
    return { error: errorMessage };
  }
};

const loginUser = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const { e } = await logIn(email, password);
    if (e) {
      return { error: e };
    } else {
      return { error: null };
    }
  } catch (e: unknown) {
    const errorMessage =
      e instanceof Error ? e.message : "An error occurred, please try again.";
    return { error: errorMessage };
  }
};

// In your main file

const updateInstructorRef = async (
  formData: FormData,
  phoneNumber: string | undefined,
  university: string,
  courses: string[],
  selectedDays: string[],
  id: string
) => {
  const preferred_language = formData.get("preferred_language") as string;
  const degree = formData.get("degree") as string;
  const major = formData.get("major") as string;
  const gender = formData.get("gender") as string;
  const employment_history = formData.get("employment_history");
  // Collecting all images into an array
  const images: File[] = [];
  const profileImage = formData.get("profile_photo") as File;
  const teachingCertificatePhoto = formData.get(
    "teaching_certificate_photo"
  ) as File;
  const idVerificationPhoto = formData.get("id_verification_photo") as File;

  if (profileImage) {
    images.push(profileImage);
  }
  if (teachingCertificatePhoto) {
    images.push(teachingCertificatePhoto);
  }
  if (idVerificationPhoto) {
    images.push(idVerificationPhoto);
  }

  // Preparing the data object to store in Firestore
  const instructorData: InstructorProfileSetUpFireStoreData = {
    preferred_language,
    degree,
    major,
    gender,
    phoneNumber,
    university,
    courses,
    selectedDays,
    employment_history,
  };

  try {
    const imageUrls = await uploadImages(images, id); // Use the utility function

    if (imageUrls[0]) {
      instructorData.profileImageUrl = imageUrls[0];
    }
    if (imageUrls[1]) {
      instructorData.teachingCertificateUrl = imageUrls[1];
    }
    if (imageUrls[2]) {
      instructorData.idVerificationUrl = imageUrls[2];
    }
    log(instructorData);
    await handleUpdate("instructors", id, instructorData);
  } catch (error) {
    console.error("Error uploading images:", error);
  }
};

const updateStudentRef = async (
  formData: FormData,
  phoneNumber: string | undefined,
  id: string
) => {
  const student_profile_photo = formData.get("student_profile_photo");
  const data = {
    phoneNumber,
    student_profile_photo,
  };
  try {
    await handleUpdate("students", id, data);

    return { e: null };
  } catch (e: unknown) {
    const errorMessage =
      e instanceof FirebaseError
        ? e?.code.split("/")[1].split("-").join(" ")
        : "An error occurred while trying to setup your profile please try again.";
    return { e: errorMessage };
  }
};

export { createUser, loginUser, updateInstructorRef, updateStudentRef };