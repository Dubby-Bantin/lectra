import { getFireStoreRefData } from "@/lib/utils";

import * as React from "react";

import { PiChalkboardTeacherLight, PiStudentFill } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";
import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import { getDocuments } from "@/lib/actions/room.actions";
import InstructorProfileCard from "@/components/dashboard/InstructorProfileCard";

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

  const roomDocuments = await getDocuments(email);
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
      total: roomDocuments?.data?.length,
      Icon: PiChalkboardTeacherLight,
      border: "F49D49",
    },
  ];

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 ">
        <h1 className="text-lg font-bold">
          Hello {`${firstName} ${lastName}`}
          <p className="text-sm">Here’s an overview of your dashboard.</p>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full border rounded-lg gap-3 min-h-[160px] place-content-center">
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
                className="p-3 w-fit rounded-full"
              >
                <Icon className="text-[20px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] font-[500]">{title}</p>
                <p>{total}</p>
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
        <LiveBlockRooms
          userId={id}
          email={email}
          text="Few"
          roomDocuments={roomDocuments}
        />
      </div>

      <div className="sm:overflow-y-auto sm:h-[47.2rem] no-scrollbar">
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
    </main>
  );
};

export default InstructorProfilePage;
