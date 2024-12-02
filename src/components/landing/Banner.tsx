import Link from "next/link";
import BannerGrid from "./BannerGrid";
import MobileBannerGrid from "./MobileBannerGrid";
import { Cover } from "../ui/cover";
const Banner = () => (
  <div className="relative flex lg:flex-row flex-col justify-between items-center gap-2 md:gap-10 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32 pt-20 md:pt-0 w-full min-h-screen font-lato">
    {/* Left Section */}
    <div className="flex flex-col justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left">
      <button className="inline-block relative bg-slate-800 shadow-2xl shadow-zinc-900 p-px rounded-full font-semibold text-white text-xs no-underline leading-6 cursor-pointer group">
        <span className="absolute inset-0 rounded-full overflow-hidden">
          <span className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />
        </span>
        <div className="relative z-10 flex items-center space-x-2 bg-zinc-950 px-4 py-0.5 rounded-full ring-1 ring-white/10">
          <span>Lectra Connect</span>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <span className="-bottom-0 left-[1.125rem] absolute bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 group-hover:opacity-40 w-[calc(100%-2.25rem)] h-px transition-opacity duration-500" />
      </button>
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
      <div className="md:dark:block left-2 -z-10 absolute hidden rounded-full w-full h-full blue__gradient"></div>
      <BannerGrid />
    </div>

    {/* Mobile Grid Section */}
    <div className="block md:hidden w-full">
      <MobileBannerGrid />
    </div>
  </div>
);

export default Banner;
