"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFireStoreRefData } from "@/lib/utils";

const AuthNavLink = ({ className }: { className: string }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [rolePath, setRolePath] = useState<string | null>(null);

  useEffect(() => {
    // Accessing cookies on the client side
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
    <Link className={className} href={`/${rolePath}/dashboard/${userId}`}>
      Dashboard
    </Link>
  );
};

export default AuthNavLink;
