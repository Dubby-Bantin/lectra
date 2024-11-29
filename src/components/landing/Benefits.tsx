import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { benefits } from "@/lib/utils/constants";
import { IoDiamondOutline } from "react-icons/io5";

const Skeleton = ({ title }: { title: string }) => (
  <div className="flex flex-1 bg-gradient-to-r from-neutral-200 dark:from-[#0C0E23] to-neutral-600 dark:to-[#050112] -mr-2 p-2 rounded-xl w-full h-full min-h-[6rem] font-poppins text-lg hover:text-gray-400">
    {title}
  </div>
);
const Benefits = () => {
  return (
    <section className="mb-20 px-5 py-10 w-full font-poppins overflow-hidden">
      <h2 className="mb-8 font-semibold text-3xl text-center md:text-4xl">
        Benefits of Learning on Lectra
      </h2>
      <BentoGrid className="mx-auto max-w-5xl font-poppins text-xs">
        {benefits.map(({ title, desc }, i) => (
          <BentoGridItem
            key={i}
            description={desc}
            header={<Skeleton title={title} />}
            icon={<IoDiamondOutline />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Benefits;
