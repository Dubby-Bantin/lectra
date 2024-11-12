import Image from "next/image";
import logo from "@/public/images/logo (2).png";
import StudentProfileSetup from "@/components/auth/StudentProfileSetUp";

const ProfileSetUp = async ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden p-5 font-lato">
      <div className="max-w-4xl space-y-4 bg-white dark:bg-background p-6 rounded-lg shadow-lg flex flex-col flex-wrap items-center justify-center mx-auto border">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="bg-dark rounded-sm p-1 mb-4"
          priority
        />
        <h1 className="text-lg md:text-xl font-bold text-center leading-tight text-gray-900 dark:text-gray-100 mb-6 font-poppins">
          Welcome, Student! Finalize Your Profile to Begin Learning
          <span className="block mt-2 text-sm  font-medium text-gray-600 dark:text-gray-300">
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
