import InstructorTabs from "@/components/common/InstructorTabs";
import Footer from "@/components/landing/Footer";
import LectureSubscribeBtn from "@/components/lectures/LectureSubscribeBtn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getFirestoreDocs } from "@/lib/utils/fireBaseUtils";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Our Instructors - Lectra",
  description:
    "Discover the expert instructors at Lectra who are transforming education. Explore their profiles and learn from the best.",
  openGraph: {
    url: "https://lectra.vercel.app/instructors",
    title: "Meet Our Instructors - Lectra",
    description:
      "Meet the top-notch educators at Lectra. Explore instructor profiles, their expertise, and join their transformative classes.",
  },
};

const InstructorsPage = async () => {
  const instructors = await getFirestoreDocs("instructors");
  if (!instructors) {
    return;
  }

  const cookieStore = cookies();
  const userId = cookieStore?.get("userId")?.value;
  return (
    <>
      <div className="px-6 py-12 w-full min-h-screen">
        <div className="w-full">
          <h1 className="mb-8 font-bold text-4xl text-center text-gray-800">
            Meet Our Instructors
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-10 w-full">
            {instructors.map(
              ({
                id,
                firstName,
                lastName,
                profileImageUrl,
                expertise,
                bio,
                selectedDays,
                degree,
                major,
                preferred_language,
                email,
                phoneNumber,
                university,
                employment_history,
              }) => (
                <div
                  key={id}
                  className="bg-background shadow-lg hover:shadow-xl p-6 border rounded-lg w-full sm:w-[25rem] max-w-sm transition-shadow duration-200"
                >
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={profileImageUrl}
                      alt={`${firstName || "Instructor"}'s Profile Image`}
                      height={240}
                      width={400}
                      className="rounded-t-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-xl dark:text-white">
                      {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                    </h3>
                    <p className="mt-1 text-[#33bbcf] text-sm">
                      {expertise.slice(0, 40)}
                    </p>
                    <p className="my-3 text-gray-600 dark:text-gray-300">
                      {bio.slice(0, 80)}
                    </p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant={"outline"}>View full details</Button>
                      </DialogTrigger>

                      <DialogContent className="sm:w-[40rem]">
                        <DialogHeader>
                          <DialogTitle>
                            {" "}
                            {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                          </DialogTitle>
                        </DialogHeader>

                        <InstructorTabs
                          firstName={firstName}
                          selectedDays={selectedDays}
                          degree={degree}
                          major={major}
                          bio={bio}
                          expertise={expertise}
                          preferred_language={preferred_language}
                          email={email}
                          phoneNumber={phoneNumber}
                          university={university}
                          employment_history={employment_history}
                        />

                        <DialogFooter>
                          <LectureSubscribeBtn
                            userId={userId}
                            instructorId={id}
                          />
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default InstructorsPage;
