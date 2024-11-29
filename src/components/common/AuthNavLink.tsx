"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { MdOutlineDashboard } from "react-icons/md";
import  Cookies  from "js-cookie";
const AuthNavLink = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [rolePath, setRolePath] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      const userIdFromCookie = Cookies.get("userId");
      if (!userIdFromCookie) {
        setUserId(null);
        setLoading(false);
        return;
      }

      setUserId(userIdFromCookie);

      try {
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
      } catch (error) {
        console.error("Error fetching role:", error);
        setRolePath(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-5">
        <span className="text-xs">loading...</span>
      </div>
    );
  }

  return (
    <>
      {userId === null ? (
        <div className="flex items-center gap-5">
          <Link
            href="/signup"
            aria-label="Sign up for a new account"
            className="flex items-center gap-4 bg-gradient-to-r from-[#0C0E23] to-[#050112] px-10 p-2 rounded-full font-poppins text-sm transition-colors duration-200"
          >
            Sign up
          </Link>
          <Link
            href="/login"
            aria-label="Log in to your account"
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
