import {
  capitalizeFirstLetter,
  convertTimestampToDate,
  getFireStoreRefData,
} from "@/lib/utils";

import * as React from "react";
import Image from "next/image";
import { Copy, MoreVertical, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { PiChalkboardTeacherLight, PiStudentFill } from "react-icons/pi";
import { FaCodepen } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import WelcomeComponent from "@/components/dashboard/WelcomeComponent";
import LiveBlockRooms from "@/components/dashboard/LiveBlockRooms";
import { getDocuments } from "@/lib/actions/room.actions";

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

  const roomDocuments = await getDocuments(email, 5);
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
      total: roomDocuments.data.length,
      Icon: PiChalkboardTeacherLight,
      border: "F49D49",
    },
  ];

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <h1 className="text-lg font-bold">
          Hello {name}
          <p className="text-sm">Here’s an overview of your dashboard.</p>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full border rounded-lg gap-3 min-h-[160px] place-content-center">
          {instructorsOverview.map(({ border, title, total, Icon }, i) => (
            <div
              key={i}
              className={`h-[100px] border-b sm:border-b-0 w-full flex items-center pl-5 gap-3 ${
                i === 0 ? "" : "sm:border-l"
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

      <div className="overflow-y-auto h-[50rem] no-scrollbar">
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                Your Profile overview
                <Button
                  size="icon"
                  variant="outline"
                  className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <Copy className="h-3 w-3" />
                  <span className="sr-only">Copy User ID</span>
                </Button>
              </CardTitle>
              <CardDescription>
                Date Created: {convertTimestampToDate(createdAt)}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <Truck className="h-3.5 w-3.5" />
                <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                  Copy userId
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="outline" className="h-8 w-8">
                    <MoreVertical className="h-3.5 w-3.5" />
                    <span className="sr-only">More</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit Profile Details</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm bg-background">
            <div className="grid gap-3">
              <div className="font-semibold">Profile Details</div>
              <div className="flex items-center justify-center rounded-full h-[15rem] w-[15rem] relative overflow-clip justify-self-center">
                {profileImageUrl ? (
                  <Image
                    src={profileImageUrl}
                    alt="profileImage"
                    priority
                    className="rounded-full object-cover"
                    width={240}
                    height={240}
                    quality={100}
                    objectFit="cover"
                    layout="responsive"
                  />
                ) : (
                  <div className="rounded-full h-full w-full border">
                    {name?.charAt(0)}
                  </div>
                )}
              </div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">First name</span>
                  <span>{name}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Last Name</span>
                  <span>{"Bantin"}</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span>{email}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Phone</span>
                  <span>{phoneNumber}</span>
                </li>
              </ul>
              <Separator className="my-4" />
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    University of Study
                  </span>
                  <span>{university}</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">
                    Preferred Teaching Language
                  </span>
                  <span>{capitalizeFirstLetter(preferred_language)}</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Major</span>
                  <span>{capitalizeFirstLetter(major)}</span>
                </li>
                <li className="flex items-center justify-between font-semibold">
                  <span className="text-muted-foreground">Degree</span>
                  <span>{capitalizeFirstLetter(degree)}</span>
                </li>
              </ul>
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div>
                <div className="font-semibold mb-3">Free Lecture Period</div>
                <div className=" flex justify-between">
                  {selectedDays.map((day, i) => (
                    <p className="text-muted-foreground" key={i}>
                      {day.toUpperCase()}
                    </p>
                  ))}
                </div>
              </div>
              <div>
                <div className="font-semibold mb-3">Courses</div>
                <ul className=" grid grid-cols-2 gap-2 w-full">
                  {courses.map((day, i) => (
                    <li className="text-muted-foreground" key={i}>
                      {capitalizeFirstLetter(day)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="">
                <div className="font-semibold mb-3">Bio</div>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aperiam repudiandae...
                </p>
              </div>
              <div className="">
                <div className="font-semibold mb-3">Employment history</div>
                <p className="text-muted-foreground font-lato">
                  {employment_history?.slice(0, 100)}...
                </p>
              </div>
              <div className="">
                <div className="font-semibold mb-3">Quote*</div>
                <p className="text-muted-foreground">Lorem ipsum dolor</p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="w-full">
              <div className="font-semibold mb-3">Teaching Certifcate</div>
              <Image
                src={teachingCertificateUrl}
                alt="profileImage"
                priority
                className="object-cover"
                width={240}
                height={240}
                quality={100}
                objectFit="cover"
                layout="responsive"
              />
            </div>
            <Separator className="my-4" />
            <div className="grid gap-3">
              <div className="font-semibold">Id verification url</div>
              <Image
                src={idVerificationUrl}
                alt="profileImage"
                priority
                className="object-cover w-full"
                width={240}
                height={240}
                quality={100}
                layout="responsive"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-between border-t bg-muted/50 px-6 py-3">
            <div className="text-xs text-muted-foreground">
              Updated <time dateTime="2023-11-23">November 23, 2023</time>
            </div>
            <Button size="icon" variant="outline" className="h-6 w-6">
              <FaCodepen className="h-3.5 w-3.5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default InstructorProfileSetUp;
