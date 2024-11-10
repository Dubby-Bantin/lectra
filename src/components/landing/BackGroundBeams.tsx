import { BackgroundBeams } from "../ui/background-beams";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

export function BackGroundBeams() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-3xl text-gradient text-center font-sans font-bold">
          Unlock the Power of Effortless Learning with Lectra!
        </h1>
        <p className="dark:text-neutral-400 text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 font-poppins">
          Discover a seamless, interactive, and personalized way to grow your
          knowledge. Whether it’s mastering new skills, staying organized, or
          connecting with expert instructors, Lectra is here to elevate your
          learning experience. Ready to make progress like never before? Join us
          today!
        </p>

        <form className="flex flex-col items-center justify-center gap-5 relative z-10 py-5">
          <Input />
          <Button
            variant={"expandIcon"}
            iconPlacement="right"
            Icon={IoIosArrowRoundForward}
            className="w-32"
          >
            Get started
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
