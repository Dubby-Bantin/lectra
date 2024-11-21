"use client";

import { setUserIdCookieNull } from "@/lib/actions/cookies.actions";
import { logOut } from "@/lib/firebaseAuth";
import { useRouter } from "next/navigation";

const LogOutButton = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const logUserOut = async () => {
    setUserIdCookieNull();
    await logOut();
    router.push(`/login?userId=${userId}`);
  };

  return <div onClick={logUserOut}>Logout</div>;
};

export default LogOutButton;
