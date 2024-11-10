import { heroSlides } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { IoDiamondOutline } from "react-icons/io5";

const Benefits = () => {
  const benefits = [
    "Personalized Learning Paths: Lectra adapts to each student’s unique pace and goals, ensuring that every lecture and resource fits your learning style.",
    "Interactive and Engaging Classes: Our platform supports real-time interactions, so you can actively participate, ask questions, and collaborate with peers for a more enriching experience.",
    "Easy Access to Expert Instructors: With certified and experienced instructors, Lectra provides top-notch guidance to help you succeed in every subject.",
    "Reliable Scheduling and Notifications: Never miss a class or deadline! Lectra’s scheduling and notification system keeps you informed and organized, making it easier to focus on learning.",
  ];

  return (
    <section className="py-10 px-5 w-full font-poppins mb-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Benefits of Learning on Lectra
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center md:px-56 gap-[15rem] w-full">
        {/* Image Section */}
        <div className="md:flex hidden flex-col gap-1 mx-10 ">
          {heroSlides.slice(0, 3).map((slide, i) => (
            <div
              key={i}
              className={`relative  h-[12rem] lg:h-[15rem] w-full lg:w-[18rem] ${
                i === 1 && "sm:left-60"
              }`}
            >
              <Image
                src={slide}
                alt={`Benefit ${i + 1}`}
                quality={100}
                layout="fill"
                objectFit="cover"
                className="shadow-lg rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Benefits Text Section */}
        <div className="flex flex-col border shadow-sm rounded-md p-5 w-fit">
          <div className="flex flex-wrap gap-5 w-full">
            {benefits.map((benefit, i) => (
              <div className="flex items-start gap-3 w-full" key={i}>
                <IoDiamondOutline className="text-[1rem]" />
                <p className="text-[.87rem] md:w-[40rem] w-full text-gray-400">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
