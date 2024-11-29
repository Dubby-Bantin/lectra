"use client";
import { AddDocumentBtnProps } from "@/types";
import LectureBtn from "./LectureBtn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { SmartDatetimeInput } from "../ui/extension/smart-datetime-input";
import scheduleLecture from "@/lib/actions/lecture.actions";
import { toast } from "sonner";
const LectureScheduleBtn = ({ userId, email }: AddDocumentBtnProps) => {
  const [datetime, setDatetime] = useState<Date | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDatetime(value ? new Date(value) : null); // Convert to Date or null if empty
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Schedule a lecture </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Lecture Schedule</h4>
            <p className="text-muted-foreground text-sm">
              Set the details for your lecture schedule.
            </p>
          </div>
          <form
            action={async (formData) => {
              try {
                const e = await scheduleLecture(
                  formData,
                  datetime,
                  email,
                  userId
                );
                if (e) {
                  toast.error(e?.e as string);
                } else {
                  toast.success(
                    "Lecture Successfully scheduled, All your students will be emailed."
                  );
                }
              } catch (error) {
                if (error instanceof Error) {
                  toast.error(error.message);
                } else {
                  toast.error("An unexpected error occurred.");
                }
              }
            }}
            className="space-y-4"
          >
            {/* Date Section */}
            <div className="flex justify-between items-center w-full">
              <Label htmlFor="date">Date</Label>
              <SmartDatetimeInput
                name="datetime"
                value={datetime ? datetime : undefined}
                onChange={handleChange}
                placeholder="e.g. tomorrow at 3pm"
                onValueChange={(date: Date) => setDatetime(date)}
              />
            </div>
            {/* Title Section */}
            <div className="flex justify-between items-center">
              <Label htmlFor="title">Title</Label>
              <Input
                name="title"
                id="title"
                placeholder="Introduction to JavaScript"
                className="w-2/3 h-8"
              />
            </div>

            {/* Duration Section */}
            <div className="flex justify-between items-center">
              <Label htmlFor="duration">Duration</Label>
              <Input
                name="duration"
                id="duration"
                placeholder="1 hour"
                className="w-2/3 h-8"
              />
            </div>
            <div className="flex justify-end items-center w-full">
              <LectureBtn text={"Schedule Lecture"} />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LectureScheduleBtn;
