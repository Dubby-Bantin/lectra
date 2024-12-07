"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
  getFirestoreDocs,
  getFireStoreRefData,
} from "@/lib/utils/fireBaseUtils";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { LuLoader } from "react-icons/lu";

const ZegoLectureBtn = ({ id }: { id?: string }) => {
  const videoId = nanoid();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const createNotification = useMutation(api.notifications.createNotification);

  async function hostVideoLecture() {
    setIsLoading(true);
    try {
      if (!id) {
        toast.error("Instructor ID is required.");
        return;
      }

      const instructor = await getFireStoreRefData(id, "instructors");
      if (!instructor || !instructor.subscribedUsers) {
        toast.error("Instructor or subscribed users not found.");
        return;
      }

      const allStudents = await getFirestoreDocs("students");
      if (!allStudents || !allStudents.length) {
        toast.error("No student data found.");
        return;
      }

      const notifiedStudents = [];
      for (const student of allStudents) {
        if (student.id && instructor.subscribedUsers.includes(student.id)) {
          await createNotification({
            text: "Your Lecturer just hosted a video lecture! Do well to join soon.",
            userId: student.id,
            roomId: videoId,
          });
          notifiedStudents.push(student.id);
        }
      }

      if (notifiedStudents.length > 0) {
        toast.success(
          `${notifiedStudents.length} students were successfully notified.`
        );
        router.push(`/video_lecture/${videoId}`);
      } else {
        toast.warning("No subscribed students found.");
      }
    } catch (error) {
      console.error("Error hosting video lecture:", error);
      toast.error("An error occurred while hosting the video lecture.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={hostVideoLecture}
      variant="outline"
      disabled={isLoading}
      className="flex items-center space-x-2"
    >
      {isLoading ? (
        <LuLoader className="text-primary animate-spin" />
      ) : (
        "Host a video lecture"
      )}
    </Button>
  );
};

export default ZegoLectureBtn;
