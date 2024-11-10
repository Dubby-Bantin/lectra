import Image from "next/image";
import e_learn from "@/public/images/istockphoto-1352727172-1024x1024.jpg";
import Link from "next/link";

const WelcomeComponent = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full border rounded-sm">
      {/* Left Section: Image/Logo */}
      <div className="md:w-1/3 relative h-[30rem]">
        <Image
          src={e_learn}
          alt="e-learning image"
          layout="fill"
          objectFit="cover" // Makes sure the image covers the whole container
          className="rounded-l-sm"
          priority
          quality={100}
        />
      </div>

      {/* Right Section: Welcome Message */}
      <div className="md:w-[70%] p-8 bg-background text-gray-300">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Welcome to Your Instructor Dashboard!
          </h2>
          <p className="text-gray-400 mb-4">
            We’re excited to have you onboard as a certified instructor. This
            dashboard is designed to simplify your experience in managing your
            profile, lectures, and student interactions.
          </p>
          <p className="text-gray-400 mb-4">
            Our goal is to provide the tools you need to deliver impactful
            lessons and foster a positive learning environment. Whether you’re
            updating your course preferences or tracking your teaching progress,
            we’ve got you covered.
          </p>
          <p className="text-gray-400 mb-6">
            If you encounter any issues or have feedback, feel free to reach out
            to our support team. We’re here to help!
          </p>
          <Link href="#" className="text-blue-400 hover:underline">
            Submit a support request
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
