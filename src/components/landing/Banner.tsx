import Link from "next/link";
import video1 from "@/public/videos/3129957-uhd_3840_2160_25fps.mp4";
import VideoPlayer from "../common/VideoPlayer";

const Banner = () => (
  <div className="relative w-full overflow-hidden h-screen font-lato">
    {/* Background Video */}
    <VideoPlayer
      video={video1}
      className="absolute inset-0 object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 dark:bg-gradient-to-t dark:from-[hsl(254,89%,4%)]/70 dark:via-transparent dark:to-[hsl(254,89%,4%)]/40"></div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 md:p-12 space-y-6">
      <h1 className="text-4xl md:text-6xl font-lato font-extrabold leading-tight text-white tracking-tight">
        Elevate Your Lecture Experience
      </h1>

      <p className="text-lg md:text-xl text-gray-300 dark:text-gray-200 max-w-2xl">
        Lectra brings you a cutting-edge platform to schedule, monitor, and
        engage in real-time lectures effortlessly around the world.
      </p>

      <div className="flex md:space-x-6 space-y-4 md:space-y-0">
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
  </div>
);

export default Banner;
