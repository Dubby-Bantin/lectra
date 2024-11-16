"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFireStoreRefData } from "@/lib/utils";
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
    <Link
      className={
        "flex items-center gap-4 rounded-sm px-4 py-2 border sm:text-sm"
      }
      href={`/${rolePath}/dashboard/${userId}`}
    >
      <MdOutlineDashboard className="sm:hidden" />
      Dashboard
    </Link>
  );
};

export default AuthNavLink;
