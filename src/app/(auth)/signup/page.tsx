import Image from "next/image";
import Link from "next/link";
// import OAuthProvider from "@/components/auth/OAuthProvider";
import logo from "@/public/images/logo (2).png";
import SignUpForm from "@/components/auth/SignUpForm";

const AuthForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative space-y-6 dark:shadow-lg py-10 p-8 sm:border rounded-lg w-full max-w-md text-white">
        <div className="flex flex-col justify-center items-center w-full">
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="bg-dark mb-4 p-1 rounded-sm"
            priority
          />
          <p className="text-center text-gray-400">Welcome</p>
        </div>
        <SignUpForm />
        {/* <OAuthProvider /> */}
        <p className="text-right text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className="text-black dark:hover:text-blue-500 dark:text-accent hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
