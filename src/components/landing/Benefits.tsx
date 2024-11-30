import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { benefits } from "@/lib/utils/constants";
import { IoDiamondOutline } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";

const Skeleton = ({
  title,
  img,
}: {
  title: string;
  img: string | StaticImageData;
}) => (
  <div className="relative bg-gradient-to-r from-neutral-200 dark:from-[#0C0E23] to-neutral-100 dark:to-[#050112] -mr-2 p-2 rounded-xl w-full h-full min-h-[6rem] font-poppins text-lg text-white hover:text-gray-400 overflow-clip">
    <Image
      src={img}
      alt={title}
      layout="responsive"
      width={600}
      height={800}
      className="rounded-xl w-full h-full object-cover"
      quality={100}
      priority
    />
  </div>
);

const Benefits = () => {
  return (
    <section className="mb-20 px-5 py-10 w-full font-poppins overflow-hidden">
      <h2 className="mb-8 font-semibold text-3xl text-center md:text-4xl">
        Benefits of Learning on Lectra
      </h2>
      <BentoGrid className="md:auto-rows-[20rem] mx-auto max-w-5xl font-poppins text-xs">
        {benefits.map(({ title, desc, img }, i) => (
          <BentoGridItem
            key={i}
            description={desc}
            header={<Skeleton title={title} img={img} />}
            icon={<IoDiamondOutline />}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Benefits;
