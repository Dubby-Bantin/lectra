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
import partner3Image from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import partner4Image from "@/public/images/1ac4b1_de2f47ad5b2940f3b5b2aaf0597ff6ed~mv2.webp";
import Footer from "@/components/landing/Footer";

const AboutPage = () => {
  const data = [
    {
      title: "Inception of Lectra",
      content:
        "Lectra was born from a desire to create an educational platform that adapts to individual learning styles. Our team came together with a vision to revolutionize online learning by making it interactive, personalized, and accessible to everyone.",
    },
    {
      title: "Building the Foundation",
      content:
        "After months of planning, we started developing the core of Lectra, focusing on integrating real-time interactive tools and building a user-friendly interface. Our goal was to offer a seamless experience that encourages student participation.",
    },
    {
      title: "Introducing Certified Instructors",
      content:
        "To ensure the highest quality education, we partnered with certified instructors across various fields. This partnership allowed us to bring expert guidance to every student, making learning on Lectra an enriching experience.",
    },
    {
      title: "Enhanced Personalization",
      content:
        "With feedback from our early users, we introduced personalized learning paths that adapt to each student’s pace and goals. This was a pivotal step in making Lectra a truly unique learning platform tailored to individual needs.",
    },
    {
      title: "Growing Community",
      content:
        "Our community grew rapidly as students and educators discovered the benefits of an interactive, adaptive learning environment. Lectra’s user base expanded globally, bringing together learners from diverse backgrounds.",
    },
    {
      title: "Ongoing Innovation",
      content:
        "Today, Lectra continues to evolve, integrating the latest in educational technology. We are committed to providing the most advanced tools and resources, ensuring that Lectra remains a leader in online education.",
    },
  ];

  return (
    <section className="py-5 px-6 space-y-20">
      <section className="py-5 px-6 space-y-20">
        <section className="py-5 px-6 space-y-20">
          <section className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 space-y-4 text-center md:text-left z-10">
              <h1 className="text-4xl font-bold">About Us</h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                At Lectra, we’re transforming learning through technology. Our
                mission is to create a personalized, engaging, and accessible
                learning environment for everyone.
              </p>
              <Button variant={"outline"}>Learn More</Button>
            </div>

            {/* Refined Image Grid */}
            <div className="relative grid grid-cols-2 gap-4 flex-1 md:max-w-lg">
              <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Image
                  src={partner1Image}
                  alt="Partner 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Image
                  src={partner2Image}
                  alt="Partner 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300 col-span-2">
                <Image
                  src={partner3Image}
                  alt="Team Member"
                  className="object-cover w-full h-[15rem]"
                />
              </div>
            </div>
          </section>
        </section>

        <Separator className="my-8" />

        {/* Core Values Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Our Story Timeline */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8">Our Story</h2>
          <Timeline data={data} />
        </section>

        <Separator className="my-8" />

        {/* Meet Our Team Section */}
        <section className="my-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-full h-40 w-40 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        {/* Call-to-Action Section */}
        <section className="text-center my-16">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us on Our Mission!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We’re always looking for passionate educators, students, and
            partners to join us in reshaping the future of learning.
          </p>
          <Button variant={"outline"}>Get Involved</Button>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        <Separator className="my-8" />

        {/* Join Us Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today</h2>
          <p className="text-lg max-w-2xl mx-auto mb-3">
            Become part of Lectra’s growing community. Whether you’re an
            instructor or student, there’s a place for you!
          </p>
          <Button variant={"outline"}>Get Started</Button>
        </section>
      </section>
      <Footer />
    </section>
  );
};

// Helper component for Core Values
const CoreValueCard = ({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="p-6 shadow-md flex items-center flex-col text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

const teamMembers = [
  { name: "Jane Doe", role: "CEO & Founder", image: partner1Image },
  { name: "John Smith", role: "Head of Engineering", image: partner2Image },
  { name: "Alex Turner", role: "Lead Developer", image: partner3Image },
  { name: "Sam Wilson", role: "Product Designer", image: partner4Image },
];

export default AboutPage;
