import LectureBoxComponent from "@/components/dashboard/LectureBoxComponent";

import { getDocuments } from "@/lib/actions/room.actions";
import { getFireStoreRefData } from "@/lib/utils";

const Lectures = async ({ params }: { params: { id: string } }) => {
  const data = await getFireStoreRefData(params.id, "instructors");

  if (!data) {
    return <p className="text-center text-red-500">Instructor not found.</p>;
  }
  const { id, email } = data;
  const roomDocuments = await getDocuments(email, 100);
  return (
    <LectureBoxComponent roomDocuments={roomDocuments} email={email} id={id} />
  );
};

export default Lectures;
