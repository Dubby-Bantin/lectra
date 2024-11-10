import Image from "next/image";
import { Button } from "../ui/button";
import liveSession from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import Link from "next/link";

const AboutSection = () => (
  <section className="text-gray-800 dark:text-gray-200 font-lato py-16 sm:py-24 md:py-40">
    <div className="container mx-auto text-center px-6">
      <h2 className="text-3xl md:text-4xl font-semibold font-poppins mb-10 text-gray-900 dark:text-gray-100">
        About Lectra
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Image Section */}
        <div className="relative mb-6 md:mb-0 w-full max-w-xs md:max-w-md">
          <Image
            src={liveSession}
            alt="Screenshot of a live teaching session in Lectra"
            className="rounded-lg shadow-lg w-full h-[20rem] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-xl text-gray-400 text-md">
          <p className="text-md mb-6 dark:text-white text-gray-600">
            Lectra is a powerful platform designed to streamline lecture
            scheduling, automated testing, and real-time data collection. Our
            mission is to simplify education management, providing tools that
            enhance productivity for both instructors and students.
          </p>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            With Lectra, instructors can easily set up courses, schedule tests,
            and monitor student progress with intuitive, data-driven
            insights—all within a secure, user-friendly interface.
          </p>

          <Link href="/about">
            <Button variant="outline" className="w-[12rem] mx-auto md:mx-0">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
