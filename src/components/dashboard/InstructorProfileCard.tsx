import { capitalizeFirstLetter, convertTimestampToDate } from "@/lib/utils";
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
                className="rounded-full"
                width={240}
                height={240}
                quality={100}
                layout="responsive"
                objectFit="cover"
                priority
              />
            ) : (
              <div className="rounded-full h-full w-full border">
                {firstName?.charAt(0) + lastName?.charAt(0)}
              </div>
            )}
          </div>
          <ul className="grid gap-3">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">First name</span>
              <span>{firstName}</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Last Name</span>
              <span>{lastName}</span>
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
              <span className="text-muted-foreground">University of Study</span>
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
            <div className="font-semibold mb-3">Expertise</div>
            <p>{expertise}</p>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="grid gap-3">
          <div className="">
            <div className="font-semibold mb-3">Bio</div>
            <p className="text-muted-foreground">{bio}</p>
          </div>
          <div className="">
            <div className="font-semibold mb-3">Employment history</div>
            <p className="text-muted-foreground font-lato">
              {employment_history?.slice(0, 100)}...
            </p>
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
  );
};

export default InstructorProfileCard;
