import Image from "next/image";
import Link from "next/link";
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface welcomeComponentProps {
  h2: string;
  p1: string;
  p2: string;
  image: string | StaticImport;
}
const WelcomeComponent = ({ h2, p1, p2, image }: welcomeComponentProps) => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full border rounded-sm">
      {/* Left Section: Image/Logo */}
      <div className="md:w-1/3 relative h-[30rem]">
        <Image
          src={image}
          alt="e-learning image"
          layout="fill"
          objectFit="cover"
          className="rounded-l-sm"
          priority
          quality={100}
        />
      </div>

      {/* Right Section: Welcome Message */}
      <div className="md:w-[70%] p-8 bg-background text-gray-300">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Welcome to Your {h2} Dashboard!
          </h2>
          <p className="text-gray-400 mb-4">{p1}</p>
          <p className="text-gray-400 mb-4">{p2}</p>
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
