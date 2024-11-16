"use client";
import { createDocument } from "@/lib/actions/room.actions";
import { AddDocumentBtnProps } from "@/types";
import LectureBtn from "./LectureBtn";
import { revalidatePath } from "next/cache";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { SmartDatetimeInput } from "../ui/extension/smart-datetime-input";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import scheduleLecture from "@/lib/actions/lecture.actions";
import { toast } from "sonner";
const LectureScheduleBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const [datetime, setDatetime] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDatetime(e.target.value);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Schedule a lecture </Button>
      </PopoverTrigger>
      <PopoverContent className="sm:w-[30rem] w-[20rem]">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Lecture Schedule</h4>
            <p className="text-sm text-muted-foreground">
              Set the details for your lecture schedule.
            </p>
          </div>
          <form
            action={async (formData) => {
              try {
                await scheduleLecture(
                  formData,
                  datetime,
                  email,
                  userId,
                  userId
                );
                toast.success("Lecture Successfully scheduled");
              } catch (error) {
                toast.error(error.message);
              }
            }}
            className="space-y-4"
          >
            {/* Date Section */}
            <div className="flex justify-between items-center w-full">
              <Label htmlFor="date">Date</Label>
              <SmartDatetimeInput
                name="datetime"
                value={datetime}
                onChange={handleChange}
                placeholder="e.g. tomorrow at 3pm"
                onValueChange={setDatetime}
              />
            </div>
            {/* Title Section */}
            <div className="flex justify-between items-center">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                id="title"
                defaultValue="Introduction to JavaScript"
                className="w-2/3 h-8"
              />
            </div>

            {/* Duration Section */}
            <div className="flex justify-between items-center">
              <Label htmlFor="duration">Duration</Label>
              <Input
                name="duration"
                id="duration"
                defaultValue="1 hour"
                className="w-2/3 h-8"
              />
            </div>
            <div className="flex justify-end items-center w-full">
              <LectureBtn text={"Schedule Lecture"} />
            </div>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LectureScheduleBtn;
