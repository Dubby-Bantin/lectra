"use server";

import { cookies } from "next/headers";

const setUserIdCookie = async (id: string) => {
  const cookieStore = cookies();
  cookieStore.set("useId", id, { secure: true });
};

export { setUserIdCookie };
