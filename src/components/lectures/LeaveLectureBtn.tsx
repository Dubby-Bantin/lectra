import LectureBtn from "./LectureBtn";
import { useRouter } from "next/navigation";

const LeaveLectureBtn = ({ userId }: { userId?: string }) => {
  const router = useRouter();

  const leaveLecture = async () => router.push(`/student/dashboard/${userId}`);

  return <LectureBtn text={"Leave Lecture"} onClick={leaveLecture} />;
};

export default LeaveLectureBtn;
