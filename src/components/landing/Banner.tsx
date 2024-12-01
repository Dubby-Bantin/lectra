import Link from "next/link";
import BannerGrid from "./BannerGrid";
import MobileBannerGrid from "./MobileBannerGrid";
import { Cover } from "../ui/cover";
const Banner = () => (
  <div className="relative flex lg:flex-row flex-col justify-between items-center gap-2 md:gap-10 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32 pt-20 md:pt-0 w-full min-h-screen font-lato">
    {/* Left Section */}
    <div className="flex flex-col justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left">
      <h1 className="font-extrabold text-3xl text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 leading-snug tracking-tight">
        Elevate Your <Cover>Lecture</Cover> Experience
      </h1>

      <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300">
        Lectra brings you a cutting-edge platform to schedule, monitor, and
        engage in real-time lectures effortlessly around the world.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
        <Link
          href="/signup"
          className="inline-flex justify-center items-center border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 border rounded-md focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-12 font-medium text-slate-400 transition-colors animate-shimmer focus:outline-none"
        >
          Get Started
        </Link>
        <Link
          href="#features"
          className="inline-flex justify-center items-center border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 border rounded-md focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-12 font-medium text-slate-400 transition-colors animate-shimmer focus:outline-none"
        >
          Learn More
        </Link>
      </div>
    </div>

    {/* Right Section - Grid for large screens */}
    <div className="md:block relative hidden w-full">
      <div className="md:dark:block left-2 -z-10 absolute hidden rounded-full w-full h-full blue__gradient" ></div>
      <BannerGrid />
    </div>

    {/* Mobile Grid Section */}
    <div className="block md:hidden w-full">
      <MobileBannerGrid />
    </div>
  </div>
);

export default Banner;
