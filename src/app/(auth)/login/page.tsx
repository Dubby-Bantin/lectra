import Image from "next/image";
import { FC } from "react";
import logo from "@/public/images/logo (2).png";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
const AuthForm: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 py-10 space-y-6 text-white rounded-lg dark:shadow-lg border relative">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="bg-dark rounded-sm p-1 mb-4"
          />
          <p className="text-center text-gray-400 ">Welcome Back</p>
        </div>
        <LoginForm />
        <p className="text-right text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href={"/signup"}
            className="text-black dark:text-accent dark:hover:text-blue-500 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
