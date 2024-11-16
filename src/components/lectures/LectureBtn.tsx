import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { FaSpinner } from "react-icons/fa";

const LectureBtn = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      onClick={onClick}
      variant={"outline"}
    >
      {!pending ? text : <FaSpinner className="animate-spin"/>}
      <PiChalkboardTeacherLight className="mx-2" />
    </Button>
  );
};

export default LectureBtn;
