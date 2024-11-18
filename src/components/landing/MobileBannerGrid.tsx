import Image from "next/image";
import { heroSlides } from "@/lib/utils/constants";

const MobileBannerGrid = () => {
  return (
    <div className="relative grid grid-cols-2 gap-2 md:gap-4 flex-1 md:max-w-lg justify-center items-center">
      {heroSlides.slice(3, 6).map((slide, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ${
            i === 2 && "col-span-2"
          }`}
        >
          <Image
            src={slide}
            className="object-cover w-full h-full"
            alt="banner image"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileBannerGrid;
