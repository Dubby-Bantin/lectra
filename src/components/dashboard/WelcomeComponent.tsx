import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface WelcomeComponentProps {
  h2: string;
  p1: string;
  p2: string;
  image: string | StaticImport;
}
const WelcomeComponent = ({ h2, p1, p2, image }: WelcomeComponentProps) => {
  return (
    <div className="flex md:flex-row flex-col border rounded-sm w-full h-full">
      <div className="relative md:w-1/3 h-[30rem]">
        <Image
          src={image}
          alt="e-learning image"
          layout="fill"
          objectFit="cover"
          className="rounded-l-sm"
        />
      </div>

      {/* Right Section: Welcome Message */}
      <div className="bg-background p-8 md:w-[70%] text-gray-300">
        <div className="text-left">
          <h2 className="mb-4 font-bold text-3xl text-white">
            Welcome to Your {h2} Dashboard!
          </h2>
          <p className="mb-4 text-gray-400">{p1}</p>
          <p className="mb-4 text-gray-400">{p2}</p>
          <p className="mb-6 text-gray-400">
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
