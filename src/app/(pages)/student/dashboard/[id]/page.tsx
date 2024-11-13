import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { getFireStoreRefData } from "@/lib/utils";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";

const UserDashBoard = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const instructorsOverview = [
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
    // {
    //   title: "Total Lectures",
    //   total: roomDocuments?.data?.length,
    //   Icon: PiChalkboardTeacherLight,
    //   border: "F49D49",
    // },
  ];

  const data = await getFireStoreRefData(id, "students");
  if (!data) {
    return;
  }

  const { name, profileImageUrl } = data;
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 ">
        <h1 className="text-lg font-bold">
          Hello {name}
          <p className="text-sm">Here’s an overview of your dashboard.</p>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full border rounded-lg gap-3 min-h-[160px] place-content-center">
          {instructorsOverview.map(({ border, title, total, Icon }, i) => (
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
                className="p-3 w-fit rounded-full"
              >
                <Icon className="text-[20px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[16px] font-medium">{title}</p>
                <p className="text-[14px] font-normal">{total}</p>
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
