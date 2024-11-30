import Image from "next/image";
import logo from "@/public/images/logo.png";
import StudentProfileSetup from "@/components/auth/StudentProfileSetUp";

const ProfileSetUp = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="relative p-5 w-full h-screen font-lato overflow-x-hidden">
      <div className="flex flex-col flex-wrap justify-center items-center space-y-4 bg-white dark:bg-background shadow-lg mx-auto p-6 border rounded-lg max-w-4xl">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="bg-dark mb-4 p-1 rounded-sm"
          priority
        />
        <h1 className="mb-6 font-bold font-poppins text-center text-gray-900 text-lg md:text-xl dark:text-gray-100 leading-tight">
          Welcome, Student! Finalize Your Profile to Begin Learning
          <span className="block mt-2 font-medium text-gray-600 text-sm dark:text-gray-300">
            Help us set up your profile by completing the required information.
            You&apos;re just a few steps away from accessing lecture classes.
          </span>
        </h1>
        <StudentProfileSetup id={id} />
      </div>
    </div>
  );
};

export default ProfileSetUp;
