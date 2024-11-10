import Image from "next/image";
import { Button } from "../ui/button";
import liveSession from "@/public/images/pexels-karolina-grabowska-4491461.jpg";

const DemoSection = () => {
  return (
    <section id="features" className="demo-section px-4 py-8">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Discover Lectra&apos;s Features
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center mb-8 gap-10 px-4 md:px-20">
        <div className="w-full md:w-1/2">
          <p className="max-w-lg mb-6 dark:text-white text-gray-600">
            Explore Lectra in action! Our walkthrough highlights the main
            features and functionalities, helping you get the most out of the
            platform.
          </p>
          <ul className="text-gray-400 mb-8 list-disc list-inside">
            <li>Account setup and customization</li>
            <li>Lecture scheduling and management</li>
            <li>Role-based access control</li>
            <li>Real-time data insights</li>
          </ul>
          <Button variant="outline">Explore More Features</Button>
        </div>
        <Image
          height={400} // Adjust height as needed
          width={400} // Adjust width as needed
          src={liveSession}
          quality={100}
          alt="Screenshot of a live teaching session in Lectra"
          layout="responsive" // Use responsive layout
          className="rounded-lg shadow-lg max-w-xs md:max-w-md" // Limit max size
        />
      </div>
    </section>
  );
};

export default DemoSection;
