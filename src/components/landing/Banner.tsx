import Link from "next/link";
import BannerGrid from "./BannerGrid";
import MobileBannerGrid from "./MobileBannerGrid";
import { Cover } from "../ui/cover";
import { Button } from "../ui/button";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
const Banner = () => (
  <div className="relative flex lg:flex-row flex-col justify-between items-center gap-2 md:gap-10 px-6 sm:px-10 md:px-20 lg:px-28 xl:px-32 pt-20 md:pt-0 w-full min-h-screen font-lato">
    {/* Left Section */}
    <div className="flex flex-col justify-center md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left">
      <button className="inline-block relative bg-background shadow-2xl shadow-zinc-900 mb-5 p-px rounded-full w-[10rem] font-semibold text-xs no-underline leading-6 cursor-pointer group">
        <div className="relative z-10 flex justify-around items-center space-x-2 px-4 py-0.5 rounded-full ring-1 ring-white/10">
          <span>Lectra Connect</span>
          <LiaAngleDoubleRightSolid size={10} />
        </div>
        <span className="-bottom-0 left-[1.125rem] absolute bg-gradient-to-r from-blue-400/0 via-blue-500/90 to-blue-400/0 w-[calc(100%-2.25rem)] h-px transition-opacity duration-500" />
      </button>
      <h1 className="font-extrabold text-3xl text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-gray-200 leading-snug tracking-tight">
        Elevate Your <Cover>Lecture</Cover> Experience
      </h1>

      <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl dark:text-gray-300">
        Lectra brings you a cutting-edge platform to schedule, monitor, and
        engage in real-time lectures effortlessly around the world.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
        <Link href="/signup">
          <Button size={"lg"} variant={"outline"}>
            Get Started
          </Button>
        </Link>
        <Link href="#features">
          <Button size={"lg"} variant={"outline"}>
            Learn More
          </Button>
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
