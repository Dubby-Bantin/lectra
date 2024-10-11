"use server";

import { logIn, signUp } from "./firebase";

const createUser = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  try {
    const { e } = await signUp(name, email, password, role);
    if (e) {
      return { error: e };
    } else {
      return { error: null };
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

export { createUser, loginUser };
