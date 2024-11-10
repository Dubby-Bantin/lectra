import Image from "next/image";
import Link from "next/link";
import OAuthProvider from "@/components/auth/OAuthProvider";
import logo from "@/public/images/logo (2).png";
import SignUpForm from "@/components/auth/SignUpForm";

const AuthForm = () => {
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
            priority
          />
          <p className="text-center text-gray-400">Welcome</p>
        </div>
        <SignUpForm />
        <OAuthProvider />
        <p className="text-right text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="hover:underline text-black dark:text-accent dark:hover:text-blue-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
