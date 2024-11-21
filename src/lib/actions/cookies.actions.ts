"use server";

import { cookies } from "next/headers";

const setUserIdCookie = async (id: string) => {
  const cookieStore = cookies();
  cookieStore.set("userId", id, { secure: true });
};
const setUserIdCookieNull = async () => {
  const cookieStore = cookies();
  cookieStore.delete("userId");
};

export { setUserIdCookie, setUserIdCookieNull };
