"use server";

import { log } from "console";

const signUp = async (formData: FormData) => {
  const user = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  log(user);
};
const login = async (formData: FormData) => {
  const user = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  log(user);
};
export { signUp, login };
