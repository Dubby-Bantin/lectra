import Link from "next/link";
import BannerGrid from "./BannerGrid";
import MobileBannerGrid from "./MobileBannerGrid";
const Banner = () => (
  <div className="relative w-full font-lato flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32  md:gap-10 gap-5   min-h-screen md:pt-0 pt-20">
    {/* Left Section */}
    <div className="flex flex-col justify-center text-center lg:text-left md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug tracking-tight text-gray-900 dark:text-gray-200">
        Elevate Your Lecture Experience
      </h1>

      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-4">
        Lectra brings you a cutting-edge platform to schedule, monitor, and
        engage in real-time lectures effortlessly around the world.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-4 sm:gap-6">
        <Link
          href="/signup"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Get Started
        </Link>
        <Link
          href="#features"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Learn More
        </Link>
      </div>
    </div>

    <div className="md:dark:block hidden blue__gradient top-40 w-[40%] h-[40%] rounded-full absolute right-32" />
    {/* Right Section - Grid for large screens */}
    <div className="hidden md:block w-full">
      <BannerGrid />
    </div>

    {/* Mobile Grid Section */}
    <div className="md:hidden block w-full">
      <MobileBannerGrid />
    </div>
  </div>
);

export default Banner;
