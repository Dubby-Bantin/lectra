import Link from "next/link";
import video1 from "../../public/videos/3129957-uhd_3840_2160_25fps.mp4";
import VideoPlayer from "../common/VideoPlayer";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden h-screen font-text">
      {/* Background Video */}

      <VideoPlayer
        video={video1}
        className="absolute inset-0 object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 dark:bg-gradient-to-t dark:from-[hsl(254,89%,4%)]/70 dark:via-transparent dark:to-[hsl(254,89%,4%)]/40"></div>

      {/* Content */}
      <div className="relative z-1 flex flex-col items-center justify-center h-full text-center p-4 md:p-8 space-y-8">
        <h1 className="text-5xl font-text md:text-7xl font-extrabold leading-tight tracking-wide text-white">
          Elevate Your Lecture Experience
        </h1>

        <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 max-w-xl">
          Lectra brings you a cutting-edge platform to schedule, monitor, and
          engage in real-time lectures effortlessly around the world.
        </p>

        <div className="flex space-x-6">
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
};

export default Banner;
