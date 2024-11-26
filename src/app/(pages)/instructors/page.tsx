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
import { cookies } from "next/headers";
import Image from "next/image";

const InstructorsPage = async () => {
  const instructors = await getFirestoreDocs("instructors");
  if (!instructors) {
    return;
  }

  const cookieStore = cookies();
  const userId = cookieStore?.get("userId")?.value;
  return (
    <>
      <div className="w-full min-h-screen py-12 px-6">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Meet Our Instructors
          </h1>
          <div className="flex flex-wrap w-full items-center justify-center gap-10">
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
                  className="bg-background border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 sm:w-[25rem] w-full max-w-sm"
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
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                    </h3>
                    <p className="text-sm text-[#33bbcf] mt-1">{expertise}</p>
                    <p className="text-gray-600 dark:text-gray-300 my-3">
                      {bio}
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
