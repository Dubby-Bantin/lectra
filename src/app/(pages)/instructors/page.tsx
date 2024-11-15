import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Instructor {
  id: number;
  name: string;
  profileImage: string;
  expertise: string;
  bio: string;
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "John Doe",
    profileImage:
      "https://media.istockphoto.com/id/1868588778/photo/e-learning-technology-concept-online-education-webinar-online-courses-ai-and-machine-learning.jpg?s=612x612&w=0&k=20&c=GtCOhuwN7iRPg9AtXvIHT1-zKyBnAbSciBzs0cJ9CD8=", // Replace with actual URLs
    expertise: "Web Development",
    bio: "An experienced web developer specializing in JavaScript and React.",
  },
  {
    id: 2,
    name: "Jane Smith",
    profileImage:
      "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=600",
    expertise: "Data Science",
    bio: "Data scientist with a passion for teaching and Python programming.",
  },
  {
    id: 3,
    name: "Michael Brown",
    profileImage:
      "https://media.istockphoto.com/id/1352742022/photo/education-on-internet-technology-e-learning-education-and-internet-lessons-person-who-attends.jpg?s=612x612&w=0&k=20&c=Yp6EuEcHlL9cXJ1-OqJvBJjldL8E_GUm8NnRX4qMyAA=",
    expertise: "Cloud Computing",
    bio: "Certified AWS architect with years of experience in cloud solutions.",
  },
];

const InstructorsPage = () => {
  return (
    <>
      <div className="min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Meet Our Instructors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-background border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={instructor.profileImage}
                    alt={instructor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-[#33bbcf] mt-1">
                    {instructor.expertise}
                  </p>
                  <p className="text-gray-600 my-3">{instructor.bio}</p>
                  <Button variant={"outline"}>Subscribe</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InstructorsPage;
