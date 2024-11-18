import Image from "next/image";
import "../../styles/BannerGrid.css";
import { heroSlides } from "@/lib/utils/constants";

const BannerGrid = () => {
  return (
    <div className="gallery relative -top-10">
      {heroSlides.map((slide, i) => (
        <Image
          key={i}
          src={slide}
          width={50}
          height={50}
          alt={slide}
          quality={100}
          layout="responsive"
        />
      ))}
    </div>
  );
};

export default BannerGrid;
