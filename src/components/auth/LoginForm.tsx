"use client";
import React, { useRef, useState } from "react";
import SubmitBtn from "../common/SubmitBtn";
import { LuLoader2 } from "react-icons/lu";
import { loginUser } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useRouter, useSearchParams } from "next/navigation";
import { setUserIdCookie } from "@/lib/actions/cookies.actions";
const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <form
      ref={formRef}
      className="mt-8 space-y-6"
      action={async (formData) => {
        const { error } = await loginUser(formData);

        if (error) {
          toast.error(`${error}, please try again`);
        } else {
          formRef.current?.reset();
          const userId = searchParams?.get("userId");
          if (!userId) {
            return;
          }
          setUserIdCookie(userId);
          console.log(userId);
          toast.info("Login successfull!");
          router.push("/");
        }
      }}
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium dark:text-white text-dark"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="input-box"
          placeholder="m@example.com"
        />
      </div>

      <div className="space-y-2 relative">
        <label
          htmlFor="password"
          className="block text-sm font-medium dark:text-white text-dark"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          required
          className="input-box"
          placeholder="********"
        />
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="dark:text-white text-black absolute top-1/2 right-2"
        >
          {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
        </div>
      </div>

      <SubmitBtn
        text="Sign In"
        loader={<LuLoader2 className="text-[1.4rem] animate-spin" />}
      />
    </form>
  );
};

export default LoginForm;
