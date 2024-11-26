import Footer from "@/components/landing/Footer";
import LectureSubscribeBtn from "@/components/lectures/LectureSubscribeBtn";
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
              }) => (
                <div
                  key={id}
                  className="bg-background border rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 sm:w-[25rem] w-full max-w-sm"
                >
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={profileImageUrl} // Fallback image
                      alt={`${firstName || "Instructor"}'s Profile Image`}
                      height={240}
                      width={400}
                      className="rounded-t-lg w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {`${firstName} ${lastName}`}
                    </h3>
                    <p className="text-sm text-[#33bbcf] mt-1">{expertise}</p>
                    <p className="text-gray-600 dark:text-gray-300 my-3">
                      {bio}
                    </p>
                    <LectureSubscribeBtn userId={userId} instructorId={id} />
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
