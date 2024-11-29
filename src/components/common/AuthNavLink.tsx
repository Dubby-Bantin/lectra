"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { MdOutlineDashboard } from "react-icons/md";

const AuthNavLink = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [rolePath, setRolePath] = useState<string | null>(null);

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [name, value] = cookie.split("=");
      acc[name] = value;
      return acc;
    }, {} as Record<string, string>);

    const userIdFromCookie = cookies["userId"];
    if (!userIdFromCookie) {
      setUserId(null);
      return;
    }

    setUserId(userIdFromCookie);

    const fetchRole = async () => {
      const instructorData = await getFireStoreRefData(
        userIdFromCookie,
        "instructors"
      );
      const studentData = await getFireStoreRefData(
        userIdFromCookie,
        "students"
      );

      if (instructorData) {
        setRolePath("instructor");
      } else if (studentData) {
        setRolePath("student");
      } else {
        setRolePath(null);
      }
    };

    fetchRole();
  }, []);

  if (!rolePath) {
    return null;
  }

  return (
    <>
      {userId === null ? (
        <div className="flex items-center gap-5">
          <Link
            href="/signup"
            aria-label="Sign up"
            className="flex items-center gap-4 bg-gradient-to-r from-[#0C0E23] to-[#050112] px-10 p-2 rounded-full font-poppins text-sm transition-colors duration-200"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            aria-label="Login"
            className="flex items-center gap-4 bg-gradient-to-r from-[#0C0E23] to-[#050112] px-10 p-2 rounded-full font-poppins text-sm transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      ) : (
        <Link
          href={`/${rolePath}/dashboard/${userId}`}
          aria-label="Go to Dashboard"
          className="flex items-center gap-4 px-3 py-2 border rounded-sm sm:text-xs"
        >
          <MdOutlineDashboard className="sm:hidden" />
          Dashboard
        </Link>
      )}
    </>
  );
};

export default AuthNavLink;
