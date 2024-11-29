import Image from "next/image";
import { heroSlides } from "@/lib/utils/constants";

const MobileBannerGrid = () => {
  return (
    <div className="gap-2 grid grid-cols-3 mx-auto md:max-w-4xl">
      {heroSlides.slice(0, 4).map((slide, index) => (
        <div
          key={index}
          className={`relative shadow-lg rounded-md h-32 overflow-hidden ${
            (index === 0 || index === 3) && "col-span-2"
          }`}
        >
          <Image
            src={slide}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileBannerGrid;
