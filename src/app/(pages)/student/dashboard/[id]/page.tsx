import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { getFireStoreRefData } from "@/lib/utils/fireBaseUtils";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";

const UserDashBoard = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const studentsOverview = [
    {
      title: "Total Lectures",
      total: 0,
      Icon: PiStudentFill,
      border: "F49D49",
    },
    {
      title: "Total Student Reviews",
      total: 0,
      Icon: MdOutlineReviews,
      border: "926EE2",
    },
  ];

  const data = await getFireStoreRefData(id, "students");
  if (!data) {
    return;
  }

  const { firstName, lastName, profileImageUrl } = data;
  return (
    <main className="flex-1 items-start gap-4 md:gap-8 grid lg:grid-cols-3 xl:grid-cols-3 sm:px-6 sm:py-0 p-4">
      <div className="items-start gap-4 md:gap-8 grid lg:col-span-2 auto-rows-max">
        <h1 className="font-bold text-lg">
          Hello {`${firstName} ${lastName}`}
          <p className="text-sm">Here’s an overview of your dashboard.</p>
        </h1>
        <div className="place-content-center gap-3 grid grid-cols-1 sm:grid-cols-2 border rounded-lg w-full min-h-[160px]">
          {studentsOverview.map(({ border, title, total, Icon }, i) => (
            <div
              key={i}
              className={`h-[100px] w-full flex items-center pl-5 gap-3 ${
                i !== 0 ? "sm:border-l" : ""
              } border-b sm:border-b-0`}
            >
              <div
                style={{
                  border: `2px solid #${border}`, // Apply color directly
                }}
                className="p-3 rounded-full w-fit"
              >
                <Icon className="text-[20px]" />
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-[16px]">{title}</p>
                <p className="font-normal text-[14px]">{total}</p>
              </div>
            </div>
          ))}
        </div>

        <WelcomeComponent
          h2="Student"
          p1="Welcome to your student dashboard! Here, you’ll find everything you need to stay organized and make the most of your learning experience. From tracking your progress to managing your enrolled courses, it’s all in one place."
          p2="Our goal is to provide you with the resources and support to help you succeed in your studies. Whether you’re accessing lecture materials, connecting with instructors, or checking your progress, we’re here to help you on your educational journey."
          image={profileImageUrl}
        />
      </div>
    </main>
  );
};
export default UserDashBoard;
