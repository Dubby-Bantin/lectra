"use server";

import { logIn, signUp } from "./firebase";

const createUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  try {
    const { e, user } = await signUp(name, email, password, role);

    if (e) {
      return { error: e };
    } else {
      return { error: null, userId: user?.uid };
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

const updateInstructorRef = async (
  formData: FormData,
  phoneNumber: string | undefined,
  selectedDate: Date | undefined,
  comboValue: string
) => {
  const address = formData.get("address") as string;
  const degree = formData.get("degree") as string;
  const major = formData.get("major") as string;
  const gender = formData.get("gender") as string;
  const profileImage = formData.get("profile_photo") as File;
  const teaching_certificate = formData.get(
    "teaching_certificate_photo"
  ) as File;
  const id_verification = formData.get("id_verification_photo") as File;
  console.log({
    address,
    degree,
    major,
    gender,
    phoneNumber,
    selectedDate,
    comboValue,
    profileImage,
    teaching_certificate,
    id_verification,
  });
};

export { createUser, loginUser, updateInstructorRef };
