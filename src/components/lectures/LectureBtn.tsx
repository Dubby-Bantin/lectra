import { Button } from "../ui/button";
import { PiChalkboardTeacherLight } from "react-icons/pi";

const LectureBtn = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => (
  <Button type="submit" onClick={onClick} variant={"outline"}>
    {text}
    <PiChalkboardTeacherLight className="mx-2" />
  </Button>
);

export default LectureBtn;
