import {
  capitalizeFirstLetter,
  convertTimestampToDate,
} from "@/lib/utils/helpers";
import { FaCodepen } from "react-icons/fa";

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
import { InstructorData } from "@/types";
const InstructorProfileCard = ({
  firstName,
  lastName,
  email,
  createdAt,
  preferred_language,
  degree,
  major,
  phoneNumber,
  university,
  expertise,
  selectedDays,
  employment_history,
  profileImageUrl,
  teachingCertificateUrl,
  idVerificationUrl,
  bio,
}: InstructorData) => {
  return (
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="gap-0.5 grid">
          <CardTitle className="flex items-center gap-2 text-lg group">
            Your Profile overview
            <Button
              size="icon"
              variant="outline"
              className="opacity-0 group-hover:opacity-100 w-6 h-6 transition-opacity"
            >
              <Copy className="w-3 h-3" />
              <span className="sr-only">Copy User ID</span>
            </Button>
          </CardTitle>
          <CardDescription>
            Date Created: {convertTimestampToDate(createdAt)}
          </CardDescription>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <Button size="sm" variant="outline" className="gap-1 h-8">
            <Truck className="w-3.5 h-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
              Copy userId
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="w-8 h-8">
                <MoreVertical className="w-3.5 h-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Profile Details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="bg-background p-6 text-sm">
        <div className="gap-3 grid">
          <div className="font-semibold">Profile Details</div>
          <div className="relative flex justify-center justify-self-center items-center rounded-full w-[15rem] h-[15rem] overflow-clip">
            {profileImageUrl ? (
              <Image
                src={profileImageUrl}
                alt="profileImage"
                className="rounded-full"
                width={240}
                height={240}
                quality={100}
                layout="responsive"
                objectFit="cover"
                priority
              />
            ) : (
              <div className="border rounded-full w-full h-full">
                {firstName?.charAt(0) + lastName?.charAt(0)}
              </div>
            )}
          </div>
          <ul className="gap-3 grid">
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">First name</span>
              <span>{firstName}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">Last Name</span>
              <span>{lastName}</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="gap-3 grid">
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">Email</span>
              <span>{email}</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">Phone</span>
              <span>{phoneNumber}</span>
            </li>
          </ul>
          <Separator className="my-4" />
          <ul className="gap-3 grid">
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">University of Study</span>
              <span>{university}</span>
            </li>
            <li className="flex justify-between items-center font-semibold">
              <span className="text-muted-foreground">
                Preferred Teaching Language
              </span>
              <span>{capitalizeFirstLetter(preferred_language)}</span>
            </li>
            <li className="flex justify-between items-center font-semibold">
              <span className="text-muted-foreground">Major</span>
              <span>{capitalizeFirstLetter(major)}</span>
            </li>
            <li className="flex justify-between items-center font-semibold">
              <span className="text-muted-foreground">Degree</span>
              <span>{capitalizeFirstLetter(degree)}</span>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="gap-3 grid">
          <div>
            <div className="mb-3 font-semibold">Free Lecture Period</div>
            <div className="flex justify-between">
              {selectedDays.map((day, i) => (
                <p className="text-muted-foreground" key={i}>
                  {day.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3 font-semibold">Expertise</div>
            <p>{expertise}</p>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="gap-3 grid">
          <div className="">
            <div className="mb-3 font-semibold">Bio</div>
            <p className="text-muted-foreground">{bio}</p>
          </div>
          <div className="">
            <div className="mb-3 font-semibold">Employment history</div>
            <p className="font-lato text-muted-foreground">
              {employment_history?.slice(0, 100)}...
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="w-full">
          <div className="mb-3 font-semibold">Teaching Certifcate</div>
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
        <div className="gap-3 grid">
          <div className="font-semibold">Id verification url</div>
          <Image
            src={idVerificationUrl}
            alt="profileImage"
            priority
            className="w-full object-cover"
            width={240}
            height={240}
            quality={100}
            layout="responsive"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-between items-center bg-muted/50 px-6 py-3 border-t">
        <div className="text-muted-foreground text-xs">
          Updated <time dateTime="2023-11-23">November 23, 2023</time>
        </div>
        <Button size="icon" variant="outline" className="w-6 h-6">
          <FaCodepen className="w-3.5 h-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InstructorProfileCard;
