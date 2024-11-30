import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Timeline } from "@/components/ui/timeline";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FAQSection from "@/components/landing/Faqs";
import { FaAward, FaChartLine, FaHandsHelping, FaUsers } from "react-icons/fa";
import partner1Image from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import partner2Image from "@/public/images/pexels-karolina-grabowska-4491461.jpg";
import partner3Image from "@/public/images/pexels-zen-chung-5538322.jpg";
import Footer from "@/components/landing/Footer";
import { data, teamMembers } from "@/lib/utils/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Get in touch with Lectra. Contact us for support, inquiries, or feedback about our platform.",
  openGraph: {
    url: "https://lectra.vercel.app/about",
  },
};
const AboutPage = () => {
  return (
    <section className="space-y-20 px-4 lg:px-6 py-8 w-full">
      <section className="space-y-20 py-8">
        <section className="flex lg:flex-row flex-col justify-center items-center gap-8 md:gap-16 px-10 lg:px-32 w-full">
          <div className="z-10 space-y-4 w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="font-bold text-4xl">About Us</h1>
            <p className="w-full lg:max-w-xl text-gray-600 text-lg">
              At Lectra, we’re transforming learning through technology. Our
              mission is to create a personalized, engaging, and accessible
              learning environment for everyone.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>

          <div className="relative flex flex-1 justify-center items-center gap-4 lg:grid grid-cols-2 mx-auto lg:mx-0 lg:w-1/3 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none">
            <div className="relative lg:left-20 shadow-lg rounded-lg w-full overflow-hidden heptagon">
              <Image
                src={partner1Image}
                alt="Partner 1"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="relative lg:top-[7.5rem] lg:left-5 shadow-lg rounded-lg w-full overflow-hidden heptagon">
              <Image
                src={partner2Image}
                alt="Partner 2"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="md:block relative -top-[3.2rem] lg:-left-[4.5rem] hidden shadow-lg rounded-lg w-full overflow-hidden heptagon">
              <Image
                src={partner3Image}
                alt="Partner 3"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Core Values Section */}
        <section>
          <h2 className="mb-8 font-semibold text-2xl text-center lg:text-3xl">
            Our Core Values
          </h2>
          <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4">
            <CoreValueCard
              icon={<FaHandsHelping className="text-blue-500" />}
              title="Empathy"
              description="We put ourselves in the learners’ shoes to provide the best experience."
            />
            <CoreValueCard
              icon={<FaAward className="text-yellow-500" />}
              title="Quality"
              description="Ensuring top-quality resources and support for an enriching learning journey."
            />
            <CoreValueCard
              icon={<FaUsers className="text-green-500" />}
              title="Community"
              description="Building an inclusive learning community to support and inspire one another."
            />
            <CoreValueCard
              icon={<FaChartLine className="text-red-500" />}
              title="Growth"
              description="Encouraging personal and professional growth at every learning stage."
            />
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="mb-8 font-semibold text-2xl text-center lg:text-3xl">
            Our Story
          </h2>
          <Timeline data={data} />
        </section>

        <Separator className="my-8" />

        <section className="my-16">
          <h2 className="mb-8 font-semibold text-2xl text-center lg:text-3xl">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-10 px-4">
            {teamMembers.map(({ name, image, role }, i) => (
              <div key={i} className="flex flex-col items-center">
                <Image
                  src={image}
                  alt={name}
                  className="mb-4 rounded-full w-32 md:w-40 h-32 md:h-40 object-cover"
                />
                <h3 className="font-semibold text-lg md:text-xl">{name}</h3>
                <p className="text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Call-to-Action Section */}
        <section className="my-16 text-center">
          <h2 className="mb-4 font-semibold text-2xl lg:text-3xl">
            Join Us on Our Mission!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 lg:text-lg">
            We’re always looking for passionate educators, students, and
            partners to join us in reshaping the future of learning.
          </p>
          <Button variant="outline">Get Involved</Button>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        <Separator className="my-8" />

        {/* Join Us Section */}
        <section className="text-center">
          <h2 className="mb-4 font-semibold text-2xl lg:text-3xl">
            Join Us Today
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-base lg:text-lg">
            Become part of Lectra’s growing community. Whether you’re an
            instructor or student, there’s a place for you!
          </p>
          <Button variant="outline">Get Started</Button>
        </section>
      </section>
      <Footer />
    </section>
  );
};

const CoreValueCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="flex flex-col items-center shadow-md p-6 text-center">
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="mb-2 font-semibold text-lg">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </Card>
);

export default AboutPage;
