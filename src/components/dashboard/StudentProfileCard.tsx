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
import { convertTimestampToDate } from "@/lib/utils/helpers";
import { Timestamp } from "firebase/firestore";
import { Copy, Truck, MoreVertical } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { FaCodepen } from "react-icons/fa";
import Image from "next/image";
const StudentProfileCard = ({
  firstName,
  lastName,
  profileImageUrl,
  createdAt,
  phoneNumber,
  email,
}: {
  firstName: string;
  lastName: string;
  profileImageUrl: string | StaticImport;
  createdAt: Timestamp;
  phoneNumber?: string;
  email: string;
}) => {
  return (
    <Card className="w-full overflow-hidden" x-chunk="dashboard-05-chunk-4">
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

export default StudentProfileCard;
