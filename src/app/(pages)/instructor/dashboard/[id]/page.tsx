import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import { PiChalkboardTeacherLight, PiStudentFill } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";
import { getDocuments } from "@/lib/actions/room.actions";
import InstructorProfileCard from "@/components/dashboard/InstructorProfileCard";
import LectureBoxComponent from "@/components/dashboard/LectureBoxComponent";
import CalendarComponent from "@/components/common/CalendarComponent";
import { getRoomDocumentsLength } from "@/lib/utils/helpers";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InstructorProfilePage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await getFireStoreRefData(id, "instructors");
  if (!data) {
    return <div>Error loading data. Please try again.</div>;
  }

  const {
    firstName,
    lastName,
    email,
    createdAt,
    preferred_language,
    degree,
    major,
    phoneNumber,
    university,
    selectedDays,
    employment_history,
    profileImageUrl,
    teachingCertificateUrl,
    idVerificationUrl,
    subscribedUsers,
    bio,
    expertise,
  } = data;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !createdAt ||
    !preferred_language ||
    !degree ||
    !major ||
    !phoneNumber ||
    !university ||
    !selectedDays.length ||
    !employment_history ||
    !profileImageUrl ||
    !teachingCertificateUrl ||
    !idVerificationUrl ||
    !bio ||
    !expertise
  ) {
    return (
      <Link
        className="flex justify-center items-center"
        href={`/instructor_profile_setup/${id}`}
      >
        <Button
          variant={"outline"}
          className="flex justify-center items-center w-fit"
        >
          Seems like your profile setup was not complete,complete your profile
          setup to start hosting lectures
        </Button>
      </Link>
    );
  }

  const roomDocuments = await getDocuments(email, 6);
  const lectureCount = await getRoomDocumentsLength(email);
  const instructorsOverview = [
    {
      title: "Total Students",
      total: subscribedUsers?.length,
      Icon: PiStudentFill,
      border: "4AC083",
    },
    {
      title: "Total Student Reviews",
      total: 0,
      Icon: MdOutlineReviews,
      border: "926EE2",
    },
    {
      title: "Total Lectures",
      total: lectureCount,
      Icon: PiChalkboardTeacherLight,
      border: "F49D49",
    },
  ];

  return (
    <main className="flex-1 items-start gap-4 md:gap-8 grid lg:grid-cols-3 xl:grid-cols-3 sm:px-6 sm:py-0 p-4">
      <div className="items-start gap-4 md:gap-8 grid lg:col-span-2 auto-rows-max">
        <h1 className="font-bold text-lg">
          Hello {`${firstName} ${lastName}`}
          <p className="text-sm">Here’s an overview of your dashboard.</p>
        </h1>
        <div className="place-content-center gap-3 grid grid-cols-1 sm:grid-cols-3 border rounded-lg w-full min-h-[160px]">
          {instructorsOverview.map(({ border, title, total, Icon }, i) => (
            <div
              key={i}
              className={`h-[100px] border-b sm:border-b-0 w-full flex items-center pl-5 gap-3 ${
                i !== 0 && "sm:border-l"
              }`}
            >
              <div
                style={{
                  border: `2px solid #${border}`, // Ensure full border value is passed
                }}
                className="p-3 rounded-full w-fit"
              >
                <Icon className="text-[20px]" />
              </div>
              <div className="flex flex-col">
                <p className="font-[500] text-[16px]">{title}</p>
                <p>{total ?? 0}</p>
              </div>
            </div>
          ))}
        </div>
        <WelcomeComponent
          h2="Instructor"
          p1="  We’re excited to have you onboard as a certified instructor. This
            dashboard is designed to simplify your experience in managing your
            profile, lectures, and student interactions."
          p2="  Our goal is to provide the tools you need to deliver impactful
            lessons and foster a positive learning environment. Whether you’re
            updating your course preferences or tracking your teaching progress,
            we’ve got you covered."
          image={profileImageUrl}
        />

        <LectureBoxComponent
          headerText="Few lectures"
          roomDocuments={roomDocuments}
          email={email}
          id={id}
          subscribedUsers={subscribedUsers}
        />
      </div>

      <div className="flex sm:flex-col flex-col-reverse items-center w-fit">
        <div className="mb-10 sm:h-[47.2rem] sm:overflow-y-auto no-scrollbar">
          <InstructorProfileCard
            firstName={firstName}
            lastName={lastName}
            email={email}
            createdAt={createdAt}
            preferred_language={preferred_language}
            degree={degree}
            major={major}
            phoneNumber={phoneNumber}
            university={university}
            expertise={expertise}
            selectedDays={selectedDays}
            employment_history={employment_history}
            profileImageUrl={profileImageUrl}
            teachingCertificateUrl={teachingCertificateUrl}
            idVerificationUrl={idVerificationUrl}
            bio={bio}
          />
        </div>
        <CalendarComponent />
      </div>
    </main>
  );
};

export default InstructorProfilePage;
