import Image from "next/image";
import { Button } from "../ui/button";
import liveSession from "@/public/images/pexels-karolina-grabowska-4491461.jpg";

const DemoSection = () => {
  return (
    <section id="features" className="relative px-4 py-8 demo-section">
      <div className="md:dark:block left-[40%] -z-10 absolute hidden w-[25%] h-[10%] blue__gradient" />

      <h2 className="mb-10 font-bold text-3xl text-center">
        Discover Lectra&apos;s Features
      </h2>

      <div className="flex md:flex-row flex-col justify-center items-center gap-10 mb-8 px-4 md:px-20">
        <div className="w-full md:w-1/2">
          <p className="mb-6 max-w-lg text-gray-600 dark:text-white">
            Explore Lectra in action! Our walkthrough highlights the main
            features and functionalities, helping you get the most out of the
            platform.
          </p>
          <ul className="mb-8 text-gray-400 list-disc list-inside">
            <li>Account setup and customization</li>
            <li>Lecture scheduling and management</li>
            <li>Role-based access control</li>
            <li>Real-time data insights</li>
          </ul>
          <Button variant="outline">Explore More Features</Button>
        </div>
        <Image
          height={400}
          width={400}
          src={liveSession}
          quality={100}
          alt="Screenshot of a live teaching session in Lectra"
          layout="responsive"
          className="shadow-lg rounded-lg max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
};

export default DemoSection;
