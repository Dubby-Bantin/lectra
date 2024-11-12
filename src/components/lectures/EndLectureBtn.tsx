import React from "react";
import LectureBtn from "./LectureBtn";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EndLectureBtn = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const endLecture = async () => {
    toast.info(
      "Your Instructor just ended the lecture, you can perhaps leave the lecture room!"
    );
    router.push(`/instructor/dashboard/${userId}/lectures`);
  };

  return <LectureBtn text={"End Lecture"} onClick={endLecture} />;
};

export default EndLectureBtn;
