import { getFireStoreRefData } from "@/lib/utils";

import * as React from "react";

import { PiChalkboardTeacherLight, PiStudentFill } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";
import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import { getDocuments } from "@/lib/actions/room.actions";
import InstructorProfileCard from "@/components/dashboard/InstructorProfileCard";

const InstructorProfileSetUp = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const data = await getFireStoreRefData(id, "instructors");
  if (!data) {
    return <div>Error loading data. Please try again.</div>;
  }

  const {
    name,
    email,
    createdAt,
    preferred_language,
    degree,
    major,
    phoneNumber,
    university,
    courses,
    selectedDays,
    employment_history,
    profileImageUrl,
    teachingCertificateUrl,
    idVerificationUrl,
  } = data;

  const roomDocuments = await getDocuments(email);
  const instructorsOverview = [
    {
      title: "Total Students",
      total: 0,
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
          Hello {name}
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
        <WelcomeComponent />
        <LiveBlockRooms
          userId={id}
          email={email}
          text="Few"
          roomDocuments={roomDocuments}
        />
      </div>

      <div className="sm:overflow-y-auto sm:h-[47.2rem] no-scrollbar">
        <InstructorProfileCard
          name={name}
          email={email}
          createdAt={createdAt}
          preferred_language={preferred_language}
          degree={degree}
          major={major}
          phoneNumber={phoneNumber}
          university={university}
          courses={courses}
          selectedDays={selectedDays}
          employment_history={employment_history}
          profileImageUrl={profileImageUrl}
          teachingCertificateUrl={teachingCertificateUrl}
          idVerificationUrl={idVerificationUrl}
        />
      </div>
    </main>
  );
};

export default InstructorProfileSetUp;
