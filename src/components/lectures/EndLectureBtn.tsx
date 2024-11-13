import LectureBtn from "./LectureBtn";
import { useRouter } from "next/navigation";

const EndLectureBtn = ({ userId }: { userId: string }) => {
  const router = useRouter();

  const endLecture = async () => {
    router.push(`/instructor/dashboard/${userId}/lectures`);
  };

  return <LectureBtn text={"End Lecture"} onClick={endLecture} />;
};

export default EndLectureBtn;
