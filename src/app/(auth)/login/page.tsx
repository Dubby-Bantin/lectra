import Image from "next/image";
import { FC } from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import { IoReturnDownBack } from "react-icons/io5";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login - Join Lectra",
  description:
    "Log in to your Lectra account to access personalized, transformative learning experiences and top-tier lectures from expert instructors.",
  openGraph: {
    url: "https://lectra.vercel.app/login",
    title: "Log into your Lectra Account",
    description:
      "Log in to Lectra to access world-class lectures, expert instructors, and a personalized learning experience tailored just for you.",
  },
};

const AuthForm: FC = () => {
  return (
    <div className="min-h-screen">
      <Link href={"/"} className="flex items-center gap-3 px-10 py-5">
        <IoReturnDownBack />
        Home
      </Link>
      <div className="flex justify-center items-center">
        <div className="relative space-y-6 dark:shadow-lg py-10 p-8 sm:border rounded-lg w-full max-w-md text-white">
          <div className="flex flex-col justify-center items-center w-full">
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="bg-dark mb-4 p-1 rounded-sm"
            />
            <p className="text-center text-gray-400">Welcome Back</p>
          </div>
          <LoginForm />
          <p className="text-right text-gray-400 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href={"/signup"}
              className="text-black dark:hover:text-blue-500 dark:text-accent hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
