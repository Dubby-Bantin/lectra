import Image from "next/image";
import { Button } from "../ui/button";
import liveSession from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import Link from "next/link";

const AboutSection = () => (
  <section className="py-16 sm:py-24 md:py-40 font-lato text-gray-800 dark:text-gray-200 overflow-clip">
    <div className="relative mx-auto px-6 text-center container">
      <h2 className="mb-10 font-poppins font-semibold text-3xl text-gray-900 md:text-4xl dark:text-gray-100">
        About Lectra
      </h2>
      <div className="md:dark:block left-[40%] -z-10 absolute hidden w-[25%] h-[10%] blue__gradient" />

      <div className="flex md:flex-row flex-col justify-center items-center gap-12 md:gap-16">
        <div className="relative mb-6 md:mb-0 w-full max-w-xs md:max-w-md">
          <Image
            src={liveSession}
            alt="Screenshot of a live teaching session in Lectra"
            className="shadow-lg rounded-lg w-full h-[20rem] object-cover"
          />
        </div>

        <div className="max-w-xl text-gray-400 text-md">
          <p className="mb-6 text-gray-600 text-md dark:text-white">
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
            <Button variant="outline" className="mx-auto md:mx-0 w-[12rem]">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
