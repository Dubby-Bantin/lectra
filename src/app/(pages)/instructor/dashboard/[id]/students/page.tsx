import {
  getFirestoreDocs,
  getFireStoreRefData,
} from "@/lib/utils/fireBaseUtils";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Your Students",
  description: "Manage and view your subscribed students",
  openGraph: {
    title: "Your Students - Instructor Dashboard",
    description: "View your students and manage subscriptions",
    siteName: "Lectra",
  },
};

const Students = async ({ params: { id } }: { params: { id: string } }) => {
  const students = await getFirestoreDocs("students");
  const instructorData = await getFireStoreRefData(id, "instructors");

  if (!instructorData) {
    redirect("/signup");
  }

  if (!students || students.length === 0) {
    return <p>You have no students subscribed to you yet.</p>;
  }

  const { subscribedUsers } = instructorData;
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="mb-8 font-semibold text-2xl text-center lg:text-3xl">
        All Your Students
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-4 w-[80%]">
        {students.map((studentData) => {
          if (!studentData.id) {
            return null;
          }
          if (subscribedUsers?.includes(studentData.id)) {
            return (
              <div key={studentData.id} className="flex flex-col items-center">
                <Image
                  src={studentData.profileImageUrl}
                  alt={`${studentData.firstName} ${studentData.lastName}`}
                  width={500}
                  height={500}
                  quality={100}
                  className="mb-4 rounded-full w-32 md:w-40 h-32 md:h-40 object-cover"
                />
                <h3 className="font-semibold text-lg">{`${studentData.firstName} ${studentData.lastName}`}</h3>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};

export default Students;
